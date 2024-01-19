import { createTransaction, deleteTransaction, takeOneTransaction, takeTransactions, updateTransaction } from "../controller/transactions.js";
import express  from "express";

const transaction = express.Router();

transaction.route('/')
    .get(takeTransactions)
    .post(createTransaction)
transaction.route('/transaction')
    .get(takeOneTransaction)
    .delete(deleteTransaction)
    .put(updateTransaction)

export {transaction};

