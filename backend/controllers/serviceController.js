const Service = require("../models/Service");

// ================= ADD SERVICE =================

const addService = async (req, res) => {

    try {

        const service = new Service(req.body);

        await service.save();

        res.status(201).json({

            message: "Service Added Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ================= GET SERVICES =================

const getServices = async (req, res) => {

    try {

        const { businessId } = req.query;

        let services;

        if (businessId) {

            services = await Service.find({

                businessId

            });

        }

        else {

            services = await Service.find();

        }

        res.json(services);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ================= UPDATE SERVICE =================

const updateService = async (req, res) => {

    try {

        const updatedService = await Service.findByIdAndUpdate(

            req.params.id,

            {

                serviceName: req.body.serviceName,
                price: req.body.price,
                duration: req.body.duration

            },

            {

                new: true

            }

        );

        res.json({

            message: "Service Updated Successfully",

            updatedService

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ================= DELETE SERVICE =================

const deleteService = async (req, res) => {

    try {

        await Service.findByIdAndDelete(

            req.params.id

        );

        res.json({

            message: "Service Deleted Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

module.exports = {

    addService,
    getServices,
    updateService,
    deleteService

};