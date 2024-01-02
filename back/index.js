import express, { query, response } from "express";
import dotenv from "dotenv"
import  bp  from "body-parser";
import   { pool }  from "./db.js";
import { user } from "./router/user.js";

const app = express()
const PORT = 8003;
dotenv.config()
app.use(bp.json())
app.use('/users',user)
app.post("/createTable", async (_, res) => {
    try {
        const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
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
});

app.get("/AllUsers", async (_, res) => {
    try {
        const queryText = `SELECT * FROM clients`;
        const result = await pool.query(queryText)
        const rows = result.rows
        res.send({message: "This is rows of table", rows})
    } catch (error) {
        console.log("failed to be successful");
        res.send("failed")
    }
})

app.get("/one", async(req, res) => {
    const { name, email } = req.body;
    try {
        const queryText = `SELECT * FROM clients WHERE name='${name}' AND email='${email}'`
        const response = await pool.query(queryText);
        res.send(response.rows)
    } catch (error) {
        console.log("failed to be successful", error);
        response.send("failed")
    }
});

app.post("/postOne", async (req, response) => {
    const { name, email} = req.body;
    console.log("this req.body", req.body);
console.log(req.body);
    try {
        const queryText = "INSERT INTO clients (name, email) VALUES ($1, $2) RETURNING *"
        const res = await pool.query(queryText, [name, email]);
        console.log(res);
        response.send(res.rows[0])
    } catch (error) {
        console.log("not successful ", error);
        response.send("failed")
    }
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })