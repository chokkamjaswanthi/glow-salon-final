import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ManageServices() {

  const businessId = localStorage.getItem("businessId");

  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [editingId, setEditingId] = useState(null);

  const loadServices = useCallback(async () => {

    try {

      const res = await axios.get(
        `https://glow-salon-final-xftu.vercel.app/api/services?businessId=${businessId}`
      );

      setServices(res.data);

    } catch (error) {

      console.log(error);

    }

  }, [businessId]);

  useEffect(() => {

    loadServices();

  }, [loadServices]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await axios.put(

          `https://glow-salon-final-xftu.vercel.app/api/services/${editingId}`,

          {
            serviceName,
            price,
            duration
          }

        );

        alert("Service Updated Successfully");

      } else {

        await axios.post(

          "https://glow-salon-final-xftu.vercel.app/api/services",

          {
            businessId,
            serviceName,
            price,
            duration
          }

        );

        alert("Service Added Successfully");

      }

      setServiceName("");
      setPrice("");
      setDuration("");
      setEditingId(null);

      await loadServices();

    } catch (error) {

      console.log(error);
      alert("Operation Failed");

    }

  };

  const editService = (service) => {

    setEditingId(service._id);
    setServiceName(service.serviceName);
    setPrice(service.price);
    setDuration(service.duration);

  };

  const deleteService = async (id) => {

    if (!window.confirm("Delete this service?")) return;

    try {

      await axios.delete(

        `https://glow-salon-final-xftu.vercel.app/api/services/${id}`

      );

      await loadServices();

    } catch (error) {

      console.log(error);

    }

  };

  const cancelEdit = () => {

    setEditingId(null);
    setServiceName("");
    setPrice("");
    setDuration("");

  };

  return (

    <>
      <Navbar />

      <div className="register-box">

        <h1>
          {editingId ? "Edit Service" : "Manage Services"}
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />

          <button type="submit">
            {editingId ? "Update Service" : "Add Service"}
          </button>

          {editingId && (

            <button
              type="button"
              onClick={cancelEdit}
            >
              Cancel
            </button>

          )}

        </form>

        <br />

        <table>

          <thead>

            <tr>

              <th>Service</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {services.map((item) => (

              <tr key={item._id}>

                <td>{item.serviceName}</td>
                <td>₹ {item.price}</td>
                <td>{item.duration}</td>

                <td>

                  <button
                    onClick={() => editService(item)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteService(item._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  );

}

export default ManageServices;