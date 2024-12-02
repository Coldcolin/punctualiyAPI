const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
    {
        amount: {type: String},
        reference: {type: String},
        status: {type: String}
     }
)

const paymentModel = mongoose.model("paymentProof", paymentSchema)

module.exports = paymentModel