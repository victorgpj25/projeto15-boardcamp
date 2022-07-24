import connection from "../database/postgres.js"

export async function getCategories (req, res) {

    const { rows: categories } = await connection.query(
        'SELECT * FROM categories'
    )
    
    res.send(categories)
}

export async function postCategory (req, res) {
    const { name } = req.body;

    await connection.query(
        'INSERT INTO categories (name) VALUES ($1)',
        [name]
    )
    
    res.sendStatus(201)
}
