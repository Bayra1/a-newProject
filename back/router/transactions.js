import { createTransaction, deleteTransaction, takeOneTransaction, takeTransactions } from "../controller/transactions.js";
import express  from "express";
import { user } from "./user.js";

const transaction = express.Router();

transaction.route('/')
    .get(takeTransactions)
    .post(createTransaction)
transaction.route('/transaction')
    .get(takeOneTransaction)
    .delete(deleteTransaction)

export {transaction};