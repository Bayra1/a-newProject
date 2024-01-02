import { pool } from "../db.js";

 const getclients = async (req, res) => {
    try {
        const queryText = `SELECT * FROM clients`
        const response = await pool.query(queryText)
        console.log(response.rows);
        res.send(response.rows)
    } catch (error) {
        console.log('something wrong', error);
    }
};

const getOneUser = async (req, res) => {
    const { name, email, id } = req.body
    try {
        const queryText = `
        SELECT * FROM clients WHERE name='${name}' AND email='${email}' OR id='${id}'
        `;
        const response = await pool.query(queryText)
    } catch (error) {
        console.log(error);
        response.send('failed')
    }
}

const createTable = async (_, res) => {
    try {
        const tableQueryText = `
        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(225) NOT NULL,
            email VARCHAR(225) NOT NULL
        )`;
        await pool.query(tableQueryText)
        res.send("Your Table is just created successfully")
    } catch (error) {
        console.log("something goes wrong", error);
        response.send("failed")
    }
}

const createUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const queryText = "INSERT INTO clients (name, email) VALUES ($1, $2) RETURNING *"
        const result = await pool.query(queryText, [name, email])
        res.send(result.rows[0])
    } catch (error) {
        console.log(error);
        res.send("falied")
    }
}

const deleteUser = async (req, res) => {
    const { name, email, id } = req.body
    try {
        const queryText = `DELETE FROM clients WHERE (name='${name}' AND email='${email}' OR id='${id}')`
        await pool.query(queryText);
        res.send("A budding process")
    } catch (error) {
        console.log('something wrong', error);
        res.send("failed to be successful")
    }
}

const updateUser = async(req, res) => {
    const {name, email, id} = req.body
    try {
        const queryText = `UPDATE clients SET name='${name}', email='${email}' WHERE id='${id}'`
        await pool.query(queryText)
        res.send("set successful")
    } catch (error) {
        console.log("something wrong");
        res.send("failed")
    }
}

export {getclients, createUser, getOneUser, createTable, deleteUser, updateUser}

