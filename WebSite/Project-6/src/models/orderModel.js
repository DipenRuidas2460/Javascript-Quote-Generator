const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    customerFullAddress: {
        type: String,
        required: true
    },
    orderLineItems: {
        type: ObjectId,
        ref: "orderLineItems",
        required: true
    },
    status: {
        type: String,
        default: "GENERATED",
        enum: ["GENERATED", "COMPLETED", "CANCELLED"]
    },
    Date: {
        type: Date,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)