const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({

    salonName: {
        type: String,
        required: true
    },

    ownerName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    logo: {
        type: String,
        default: ""
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Business", businessSchema);