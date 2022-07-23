import connection from "../database/postgres.js"
import { postCategorySchema } from "../schemas/categoriesSchema.js"

export async function postCategoryMiddleware (req, res, next) {
    const { name } = req.body;

    const validation = postCategorySchema.validate(req.body)
    if (validation.error) {
        return res.sendStatus(400)
    }

    next()
}