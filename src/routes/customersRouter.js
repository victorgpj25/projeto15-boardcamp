import express from "express"
import { getCustomers, getCustomersById, postCustomer, updateCustomer } from "../controllers/customersController.js"
import { postCustomerMiddleware, updateCustomerMiddleware } from '../middlewares/customersMiddleware.js';

const customersRouter = express.Router()

customersRouter.get("/customers", getCustomers)
customersRouter.get("/customers/:id", getCustomersById)
customersRouter.post("/customers", postCustomerMiddleware, postCustomer)
customersRouter.put("/customers/:id", updateCustomerMiddleware, updateCustomer)

export default customersRouter