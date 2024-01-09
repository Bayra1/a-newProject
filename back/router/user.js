import express from "express";
import { LoginUser, createUser, deleteUser, getOneUser, getusers, updateUser } from "../controller/user.js";

const user = express.Router();

user.route('/')
    .get(getusers)
    .post(createUser)
user.route('/user')
    .get(getOneUser)
    .delete(deleteUser)
    .put(updateUser)
    .post(LoginUser)
user.route('/one')
    .post(LoginUser)
export { user };


