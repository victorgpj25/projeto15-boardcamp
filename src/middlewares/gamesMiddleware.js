import connection from "../database/postgres.js"
import { postGameSchema } from "../schemas/gamesSchema.js"

export async function postGameMiddleware (req, res, next) {
    const { name, categoryId } = req.body

    const validation = postGameSchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    next()
}