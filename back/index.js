import express, { query, response } from "express";
import dotenv from "dotenv"
import  bp  from "body-parser";
import   { pool }  from "./db.js";
import { user } from "./router/user.js";
import cors from "cors"

const app = express()
const PORT = 8002;
dotenv.config()
app.use(cors())
app.use(bp.json())
app.use('/users',user)

const enableUuidOsspExtensionQuery = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, _) => {
  if (err) {
    console.error('Error enabling uuid-ossp extension:', err);
  } else {
    console.log('uuid-ossp extension enabled');
  }
});

app.post("/createTable", async (_, res) => {
    try {
        const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255),
        avatar_img BYTEA,
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
























  // app.get("/AllUsers", async (_, res) => {
//     try {
//         const queryText = `SELECT * FROM clients`;
//         const result = await pool.query(queryText)
//         const rows = result.rows
//         res.send({message: "This is rows of table", rows})
//     } catch (error) {
//         console.log("failed to be successful");
//         res.send("failed")
//     }
// })

// app.get("/one", async(req, res) => {
//     const { name, email } = req.body;
//     try {
//         const queryText = `SELECT * FROM clients WHERE name='${name}' OR email='${email}'`
//         const response = await pool.query(queryText);
//         res.send(response.rows)
//     } catch (error) {
//         console.log("failed to be successful", error);
//         response.send("failed")
//     }
// });

// app.post("/postOne", async (req, response) => {
//     const { name, email} = req.body;
//     console.log("this req.body", req.body);
// console.log(req.body);
//     try {
//         const queryText = "INSERT INTO clients (name, email) VALUES ($1, $2) RETURNING *"
//         const res = await pool.query(queryText, [name, email]);
//         console.log(res);
//         response.send(res.rows[0])
//     } catch (error) {
//         console.log("not successful ", error);
//         response.send("failed")
//     }
// })
