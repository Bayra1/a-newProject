import { pool } from "../db.js";

const takeTransaction = async (_, res) => {
    try {
        const queryText = `SELECT * FROM transactions`;
        const response = await pool.query(queryText)
        res.send(response.rows)
    } catch (error) {
        console.log('error', error);
        res.send('Failed to be took')
    }
};

export {takeTransaction}