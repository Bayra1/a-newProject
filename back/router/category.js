import { getCategories, createCategory, fetchSingleCategories, updateCategory, deleteCategory} from "../controller/categories.js";
import  express  from "express";

const category = express.Router();

category.route('/')
    .get(getCategories)
    .post(createCategory)
category.route('/category')
    .get(fetchSingleCategories)
    .put(updateCategory)
    .delete(deleteCategory)
export {category}