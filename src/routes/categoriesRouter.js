import express from "express"
import { getCategories, postCategory } from "../controllers/categoriesController.js"
import { postCategoryMiddleware } from '../middlewares/categoriesMiddleware.js';

const categoriesRouter = express.Router()

categoriesRouter.get("/categories", getCategories)
categoriesRouter.post("/categories", postCategoryMiddleware, postCategory)

export default categoriesRouter