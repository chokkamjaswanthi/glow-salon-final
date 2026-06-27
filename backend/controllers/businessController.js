const Business = require("../models/Business");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER BUSINESS =================

const registerBusiness = async (req, res) => {

    try {

        const {
            salonName,
            ownerName,
            email,
            phone,
            password,
            address
        } = req.body;

        const existingBusiness = await Business.findOne({ email });

        if (existingBusiness) {
            return res.status(400).json({
                message: "Business already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const business = new Business({
            salonName,
            ownerName,
            email,
            phone,
            password: hashedPassword,
            address
        });

        await business.save();

        res.status(201).json({
            message: "Business Registered Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

// ================= LOGIN BUSINESS =================

const loginBusiness = async (req, res) => {

    try {

        const { email, password } = req.body;

        const business = await Business.findOne({ email });

        if (!business) {
            return res.status(400).json({
                message: "Business not found"
            });
        }

        const isMatch = await bcrypt.compare(password, business.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: business._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Business Login Successful",
            token,
            businessId: business._id,
            salonName: business.salonName,
            ownerName: business.ownerName
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    registerBusiness,
    loginBusiness
};