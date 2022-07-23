import connection from "../database/postgres.js"
import { postRentalSchema } from "../schemas/categoriesSchema.js"

export async function postRentalMiddleware (req, res, next) {
    const { customerId, gameId } = req.body;

    const validation = postRentalSchema.validate(req.body)
    const { rows: customerExists } = connection.query('SELECT * FROM customers WHERE id = $1', [customerId])
    const { rows: selectedGame } = connection.query('SELECT * FROM games WHERE id = $1', [gameId])
    const { rows: ongoingRentals } = connection.query('SELECT * FROM rentals WHERE ("gameId" = $1 AND "returnDate" IS NULL)', [gameId])
    if (validation.error || !customerExists.length || !selectedGame.length || ongoingRentals.length >= selectedGame[0].stockTotal) {
        return res.sendStatus(400)
    }

    next()
}

export async function returnRentalMiddleware (req, res, next) {
    const { id } = req.params

    const { rows: selectedRental } = connection.query('SELECT * FROM rentals WHERE id = $1', [id])
    if (!selectedRental.length) {
        return res.sendStatus(404)
    }

    if (selectedRental.returnDate) {
        return res.sendStatus(400)
    }

    next()
}

export async function deleteRentalMiddleware (req, res, next) {
    const { id } = req.params

    const { rows: selectedRental } = connection.query('SELECT * FROM rentals WHERE id = $1', [id])
    if (!selectedRental.length) {
        return res.sendStatus(404)
    }

    if (!selectedRental.returnDate) {
        return res.sendStatus(400)
    }


    next()
}