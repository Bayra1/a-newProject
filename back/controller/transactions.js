import { pool } from "../db.js";

const takeTransactions = async (_, res) => {
    try {
        const queryText = `SELECT * FROM transactions`;
        const response = await pool.query(queryText);
        res.status(200).json(response.rows);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).send('Failed to fetch transactions');
    }
};

const createTransaction = async (req, res) => {
    console.log(req.body);
    const { amount, user_id, transaction_type, category_id, description, name } = req.body;
    
    try {
        const queryText = "INSERT INTO transactions (amount, user_id, transaction_type, category_id, description, name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const response = await pool.query(queryText, [amount, user_id, transaction_type, category_id, description, name]);
        res.send(response.rows[0]);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).send('Failed to create transaction');
    }
};

const takeOneTransaction = async (req, res) => {
    const {id} = req.body
    try { 
        const queryText = `SELECT * FROM transactions WHERE id=$1`
        const response = await pool.query(queryText, [id])
        res.send({Specific : response.rows})
    } catch (error) {
        console.log('error fetching one transaction', error);
        res.send('Failed to fetch one transaction')
    }
}

const deleteTransaction = async (req, res) => {
    const { id, name } = req.body
    try {
        const queryText = `DELETE FROM transactions WHERE id=$1 OR name=$2`
        await pool.query(queryText, [id, name])
        res.send('Transaction is deleted successfully')
    } catch (error) {
        console.log('error deleting', error);
        res.send('error deleting');
    }
}

export { takeTransactions, createTransaction, takeOneTransaction, deleteTransaction };
