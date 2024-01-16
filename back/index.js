import express, { query, response } from "express";
import dotenv from "dotenv"
import bp from "body-parser";
import { pool } from "./db.js";
import { user } from "./router/user.js";
import cors from "cors"

const app = express()
const PORT = 8003;
dotenv.config()
app.use(cors())
app.use(bp.json())
app.use('/users', user)

const enableUuidOsspExtensionQuery = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, _) => {
  if (err) {
    console.error('Error enabling uuid-ossp extension:', err);
  } else {
    console.log('uuid-ossp extension enabled');
  }
});

app.post("/createUserTable", async (_, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        country VARCHAR(255) NOT NULL,
        currency_type TEXT DEFAULT 'MNT'
        )`;
    await pool.query(tableQueryText);
    res.send("Your table is just created successfully");
  } catch (error) {
    console.log("Something goes wrong", error);
    res.send("Failed to create the table");
  }
});

app.post("/createCategory", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(225) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_image TEXT
    )`;
    await pool.query(tableQueryText);
    res.send('Category Table has been created successfully!')
  } catch (error) {
    console.log('error for creating category');
    res.send('Failed to create Category Table')
  }
})

app.post("/createTransactionTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS transactions (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID REFERENCES users(id),
      name TEXT,
      amount REAL NOT NULL,
      transaction_type ENUM('INC', 'EXP'),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_id uuid REFERENCES your_category_table(id)
    )`;
    await pool.query(tableQueryText);
    res.send('Your Transactions Table has been made')
  } catch (error) {
    console.log('error for making Transaction Table', error);
    res.send('Failed to making TransactionTable')
  }
})

// In case deleting an unnecessary Table
app.post("/deleteTable", async (_, res) => {
  try {
    const queryText = `DROP TABLE IF EXISTS users`;
    await pool.query(queryText)
    res.send({ message: `Table deleted successfully` });
  } catch (error) {
    console.error("Error deleting table:", error);
    res.send("something wrong for deleting")
  }
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
