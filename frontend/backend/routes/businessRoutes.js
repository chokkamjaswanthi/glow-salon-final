const express = require("express");
const Business = require("../models/Business");

const router = express.Router();

const {
    registerBusiness,
    loginBusiness
} = require("../controllers/businessController");

// Business Registration
router.post("/register", registerBusiness);

// Business Login
router.post("/login", loginBusiness);

router.get("/", async (req, res) => {

    try {

        const businesses = await Business.find();

        res.json(businesses);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;