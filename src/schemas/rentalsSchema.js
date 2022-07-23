import joi from "joi"

const postRentalSchema = joi.object({
    daysRented: joi.number().min(0).required()
})

export { postRentalSchema }