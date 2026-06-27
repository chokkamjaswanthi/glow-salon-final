const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Business",
        required:true
    },

    salonName:{
        type:String,
        required:true
    },

    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    service:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    }

},
{
    timestamps:true
});

module.exports=mongoose.model("Appointment",appointmentSchema);