import { random } from "nanoid";
import { pool } from "../db.js";
import { v4 as id } from 'uuid';

// Look At All Information of Users
const getusers = async (_, res) => {
    try {
        const queryText = `SELECT * FROM users`;
        const response = await pool.query(queryText);

        console.log(response.rows);
        res.send({ users: response.rows });
    } catch (error) {
        console.log('something wrong', error);
        res.send('failed');
    }
};

// Looking For A Single User 
const getOneUser = async (req, res) => {
    const { name, email, id } = req.body
    try {
        const queryText = `
        SELECT * FROM users WHERE name=$1 OR email=$2 OR id=$3
        `;
        const response = await pool.query(queryText, [name, email, id]);
        res.send({ DesiredUser: response.rows })
    } catch (error) {
        console.log(error);
        res.send('failed to be successful')
    }
}
// Creating a new user
const createUser = async (req, res) => {
    console.log(req.body);
    const { name, email, password} = req.body
    try {
        const queryText = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *"
        const result = await pool.query(queryText, [name, email, password])
        res.send(result.rows[0])
    } catch (error) {
        console.log('error to post a user', error);
        res.send("falied")
    }
}
//  A Delete command
const deleteUser = async (req, res) => {
    const { name, email, id } = req.body
    try {
        const queryText = `DELETE FROM users WHERE name=$1 OR email=$2 OR id=$3`
        await pool.query(queryText, [name, email, id]);
        res.send('A delete command is successfully completed')
    } catch (error) {
        console.log('something wrong', error);
        res.send("failed to be successful")
    }
}

// An Update command is below
const updateUser = async (req, res) => {
    const { name, email, id } = req.body
    try {
        const queryText = `UPDATE users SET name=$1, email=$2 WHERE id=$3`
        await pool.query(queryText, [name, email, id])
        res.send("set successful")
    } catch (error) {
        console.log("something wrong", error);
        res.send("failed")
    }
}

const LoginUser = async (req, res) => {
    console.log(req.body);
    const {email} = req.body
    try {
        const queryText = `SELECT * FROM users WHERE email='${email}'`
        const ExUser = await pool.query(queryText)
        if (ExUser.rows.length !== 0) {
           return res.send('ExUser')
        } 
        res.send({ExUser: ExUser.rows})
    } catch (error) {
        console.log("Failed to find an existing user", error);
    } 
}

export { getusers, createUser, getOneUser, deleteUser, updateUser, LoginUser }


























// import { pool } from "../../db.js";

// const getTransactions = async (req, res) => {
//   try {
//     const queryText = `SELECT * FROM transactions`;
//     const response = await pool.query(queryText);
//     res.send(response.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const getOneTransaction = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const queryText = `SELECT * FROM transactions WHERE id = $1`;
//     const response = await pool.query(queryText, [id]);
//     res.send(response.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const createTransaction = async (req, res) => {
//   const { user_id, name, amount, transaction_type, description, category_id } = req.body;
//   try {
//     const insertQuery = `
//       INSERT INTO transactions (user_id, name, amount, transaction_type, description, category_id)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING *`;
      
//     const result = await pool.query(insertQuery, [user_id, name, amount, transaction_type, description, category_id]);
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const deleteTransaction = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const queryText = `DELETE FROM transactions WHERE id = $1`;
//     await pool.query(queryText, [id]);
//     res.send("OK");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const updateTransaction = async (req, res) => {
//   const { id } = req.params;
//   const { user_id, name, amount, transaction_type, description, category_id } = req.body;
//   try {
//     const queryText = `
//       UPDATE transactions
//       SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6
//       WHERE id = $7
//       RETURNING *`;

//     const result = await pool.query(queryText, [user_id, name, amount, transaction_type, description, category_id, id]);
//     res.send(result.rows[0]).end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export { getTransactions, getOneTransaction, createTransaction, deleteTransaction, updateTransaction };