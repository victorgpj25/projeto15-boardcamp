import DateExtension from "@joi/date"
import * as joiImport from "joi"
const joi = joiImport.extend(DateExtension)

const generalCustomerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().pattern(new RegExp("^[0-9]{10,11}$")).required(),
    cpf: joi.string().pattern(new RegExp("^[0-9]{11}$")).required(),
    birthday: joi.date().format('YYYY-MM-DD').required()
})

export { generalCustomerSchema }