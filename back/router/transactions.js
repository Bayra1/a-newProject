import { takeTransaction } from "../controller/transactions.js";
import { express } from "express";
import { user } from "./user.js";

const transaction = express.Router()
transaction.route('/')
.get(takeTransaction)






app.post("/createTransactionTable", async (_, res) => {
    try {
      const transactionTableQueryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id uuid REFERENCES users(id),
        name TEXT,
        amount REAL NOT NULL,
        transaction_type VARCHAR(3) CHECK (transaction_type IN ('INC', 'EXP')),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id uuid REFERENCES category(id)
    );`;
      await pool.query(transactionTableQueryText);
      res.send("Transaction table created successfully");
    } catch (error) {
      console.error(error);
      res.send("Error creating transaction table");
    }
  });