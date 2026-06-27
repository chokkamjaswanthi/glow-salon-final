const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");
const businessRoutes = require("./routes/businessRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/services", serviceRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {

console.log("MongoDB Connected");

})
.catch((err)=>{

console.log(err);

});

app.listen(5000, ()=>{

console.log("Server Running on Port 5000");

});