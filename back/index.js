import express, { query, response } from "express";
import dotenv from "dotenv"
import bp from "body-parser";
import cors from "cors"
import { pool } from "./db.js";
import { user } from "./router/user.js";
import { transaction } from "./router/transactions.js";
import  {category}  from "./router/category.js";


const app = express()
const PORT = 8003;
dotenv.config()
app.use(cors())
app.use(bp.json())
app.use('/users', user)
app.use('/transactions', transaction)
app.use('/categories', category)

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
        currency_type TEXT DEFAULT 'MNT'
        )`;
    await pool.query(tableQueryText);
    res.send("Your table is just created successfully");
  } catch (error) {
    console.log("Something goes wrong", error);
    res.send("Failed to create the table");
  }
});

app.post("/createCategoryTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS categories (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid REFERENCES users(id),
      name VARCHAR(150) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_img TEXT
    )
      `;
    await pool.query(tableQueryText);
    res.send('Categories Table has been created successfully!')
  } catch (error) {
    console.log('error for creating categoryTable', error);
    res.send('Failed to create Category Table')
  }
})

app.post("/createTransactionTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS transactions (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID REFERENCES users(id),
      note TEXT,
      amount REAL NOT NULL,
      transaction_type VARCHAR(25) CHECK (transaction_type IN ('INC', 'EXP')),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      categories_id uuid REFERENCES categories(id)
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


