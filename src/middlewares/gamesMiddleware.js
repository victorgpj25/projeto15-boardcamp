import connection from "../database/postgres.js"
import { postGameSchema } from "../schemas/gamesSchema.js"

export async function postGameMiddleware (req, res, next) {
    const { name, categoryId } = req.body

    const validation = postGameSchema.validate(req.body)
    const { rows: categoryExists } = connection.query('SELECT * FROM categories WHERE id = $1', [categoryId])
    if (validation.error || !categoryExists.length) {
        return res.sendStatus(400)
    }

    const { rows: gameNameAlreadyExists } = connection.query('SELECT * FROM games WHERE name = $1', [name])
    if (gameNameAlreadyExists.length) {
        return res.sendStatus(409)
    }

    next()
}