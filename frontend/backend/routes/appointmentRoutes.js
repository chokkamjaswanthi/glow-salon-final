const express=require("express");

const router=express.Router();

const Appointment=require("../models/Appointment");

// ================= CREATE APPOINTMENT =================

router.post("/",async(req,res)=>{

    try{

        const appointment=new Appointment(req.body);

        await appointment.save();

        res.status(201).json({

            message:"Appointment Booked Successfully"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});

// ================= GET APPOINTMENTS =================

router.get("/",async(req,res)=>{

    try{

        const {businessId,email}=req.query;

        let filter={};

        if(businessId){

            filter.businessId=businessId;

        }

        if(email){

            filter.email=email;

        }

        const appointments=await Appointment.find(filter);

        res.json(appointments);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});

// ================= BUSINESS HISTORY =================

router.get("/history/:businessId",async(req,res)=>{

    try{

        const appointments=await Appointment.find({

            businessId:req.params.businessId

        });

        res.json(appointments);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});

// ================= UPDATE STATUS =================

router.put("/:id",async(req,res)=>{

    try{

        const appointment=await Appointment.findByIdAndUpdate(

            req.params.id,

            {

                status:req.body.status

            },

            {

                new:true

            }

        );

        res.json(appointment);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});

// ================= DELETE =================

router.delete("/:id",async(req,res)=>{

    try{

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({

            message:"Appointment Deleted"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});

module.exports=router;