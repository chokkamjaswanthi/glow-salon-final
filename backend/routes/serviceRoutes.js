const express = require("express");

const router = express.Router();

const {

    addService,
    getServices,
    updateService,
    deleteService

} = require("../controllers/serviceController");

router.post("/", addService);

router.get("/", getServices);

router.put("/:id", updateService);

router.delete("/:id", deleteService);

module.exports = router;