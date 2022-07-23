import connection from "../database/postgres.js"
import { generalCustomerSchema } from "../schemas/customersSchema.js"

export async function getCustomersByIdMiddleware (req, res, next) {
    const { id } = req.params

    next()
}

export async function postCustomerMiddleware (req, res, next) {
    const { cpf } = req.body

    const validation = generalCustomerSchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    next()
}

export async function updateCustomerMiddleware (req, res, next) {
    const { cpf } = req.body;

    const validation = generalCustomerSchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    next()
}