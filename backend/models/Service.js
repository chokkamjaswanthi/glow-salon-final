const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({

    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business",
        required: true
    },

    serviceName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Service", serviceSchema);