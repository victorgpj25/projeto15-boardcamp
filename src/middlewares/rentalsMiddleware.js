import connection from "../database/postgres.js"
import { postRentalSchema } from "../schemas/categoriesSchema.js"

export async function postRentalMiddleware (req, res, next) {
    const { customerId, gameId } = req.body;

    const validation = postRentalSchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    next()
}

export async function returnRentalMiddleware (req, res, next) {
    const { id } = req.params


    next()
}

export async function deleteRentalMiddleware (req, res, next) {
    const { id } = req.params


    next()
}