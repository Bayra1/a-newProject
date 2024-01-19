import { pool } from "../db.js";

const getCategories = async (_, res) => {
    try {
        const queryText = `SELECT * FROM categories`;
        const response = await pool.query(queryText);
        res.send({AllCategories: response.rows})
    } catch (error) {
        console.log('Failed to get SingleCategory', error);
        res.send('just failed')
    }
}

const createCategory = async (req, res) => {
    const {name, description, user_id} = req.body
    try {
        const queryText = `INSERT INTO categories (name, description, user_id) VALUES ($1, $2, $3) RETURNING *`;
        const response = await pool.query(queryText, [name, description, user_id])
        res.send(response.rows[0])
    } catch (error) {
        console.log('error at creating category', error);
        res.send('failed to create a single category')
    }
}

const fetchSingleCategories = async (req, res) => {
    const {name, user_id, id} = req.body
    try {
        const queryText = `SELECT * FROM categories WHERE name=$1 OR user_id=$2 OR id=$3`
        const response = await pool.query(queryText, [name, user_id, id])
        res.send({ExactCategory: response.rows})
    } catch (error) {
        console.log('error at fetching', error);
        res.send('fetching a single category')
    }
}

const updateCategory = async (req, res) => {
    const {name, description, id} = req.body
    try {
        const queryText = `UPDATE categories SET name=$1, description=$2 WHERE id=$3 RETURNING *`;
        await pool.query(queryText, [name, description, id])
        res.send('updated well')
    } catch (error) {
        console.log('failed to update category', error);
        res.send('failed to update')
    }
}

const deleteCategory = async (req, res) => {
    const {name, description} = req.body
    try {
        const queryText = `DELETE FROM categories WHERE name=$1 OR description=$2`;
        await pool.query(queryText, [name, description])
        res.send('deleted succesfully')
    } catch (error) {
        console.log('error for deleting', error);
        res.send('cant delete')
    }
}

export {getCategories, createCategory, fetchSingleCategories, updateCategory, deleteCategory}