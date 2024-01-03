import express from "express";
import { createUser, deleteUser, getOneUser, getusers, updateUser } from "../controller/user.js";

const user = express.Router();

user.route('/')
    .get(getusers)
    .post(createUser)
user.route('/user')
    .get(getOneUser)
    .delete(deleteUser)
    .put(updateUser)
export { user };


