import connection from "../database/postgres.js"
import { postCategorySchema } from "../schemas/categoriesSchema.js"

export async function postCategoryMiddleware (req, res, next) {
    const { name } = req.body;

    const validation = postCategorySchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    const { rows: categoryAlreadyExists } = connection.query('SELECT * FROM categories WHERE name = $1', [name])
    if (categoryAlreadyExists.length) {
        return res.sendStatus(409)
    }

    next()
}