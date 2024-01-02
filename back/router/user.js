import express from "express";
import { createUser, deleteUser, getOneUser, getclients, updateUser } from "../controller/user.js";

const user = express.Router();

user.route('/hello').get(getclients).post(createUser)
user.route('/user').get(getOneUser).delete(deleteUser).put(updateUser)
export { user };
