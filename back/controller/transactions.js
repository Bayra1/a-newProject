import { pool } from "../db.js";

const takeTransactions = async (_, res) => {
    try {
        const queryText = `SELECT * FROM transactions`;
        const response = await pool.query(queryText);
        res.send({AllTransactions : response.rows})
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).send('Failed to fetch transactions');
    }
};

const createTransaction = async (req, res) => {
    console.log(req.body);
    const { amount, user_id, transaction_type, category_id, description, note } = req.body;
    
    try {
        const queryText = "INSERT INTO transactions (amount, user_id, transaction_type, category_id, description, note) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const response = await pool.query(queryText, [amount, user_id, transaction_type, category_id, description, note]);
        res.send(response.rows[0]);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).send('Failed to create transaction');
    }
};

const takeOneTransaction = async (req, res) => {
    const {id, note} = req.body
    try { 
        const queryText = `SELECT * FROM transactions WHERE id=$1 OR note=$2`
        const response = await pool.query(queryText, [id, note])
        res.send({SpecificTransaction : response.rows})
    } catch (error) {
        console.log('error fetching one transaction', error);
        res.send('Failed to fetch one transaction')
    }
}

const deleteTransaction = async (req, res) => {
    const { id, note } = req.body
    try {
        const queryText = `DELETE FROM transactions WHERE id=$1 OR note=$2`
        await pool.query(queryText, [id, note])
        res.send('Transaction is deleted successfully')
    } catch (error) {
        console.log('error deleting', error);
        res.send('error deleting');
    }
}

const updateTransaction = async (req, res) => {
    const {note, description, amount, id} = req.body;
    console.log(req.body);
    try {
        const queryText = `UPDATE transactions SET note = $1 , description = $2, amount = $3 WHERE id = $4 RETURNING *`;
        await pool.query(queryText, [note, description, amount, id]);        
        res.send('updated successfully')
    } catch (error) {
        console.error('Error at updating', error);
        res.send('Failed to update');
    }
}



export { takeTransactions, createTransaction, takeOneTransaction, deleteTransaction, updateTransaction };
