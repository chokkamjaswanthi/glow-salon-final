const handleSubmit = async (e) => {

  e.preventDefault();

  if (!businessId || !salonName) {

    alert("Please select a salon first.");

    navigate("/salons");

    return;

  }

  try {

    await axios.post(

      "https://glow-salon-final-xftu.vercel.app/api/appointments",

      {

        businessId,
        salonName,
        ...form

      }

    );

    alert("Appointment Booked Successfully!");

    localStorage.removeItem("selectedBusinessId");
    localStorage.removeItem("selectedSalonName");
    localStorage.removeItem("selectedService");

    setForm({

      name: "",
      email: userEmail || "",
      phone: "",
      service: "",
      date: ""

    });

    navigate("/history");

  }

  catch (error) {

    console.log(error);

    alert("Failed to Book Appointment");

  }

};