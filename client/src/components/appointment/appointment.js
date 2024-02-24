import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendar } from "react-icons/fa";
import "./appointment.css";
import { useNavigate } from "react-router-dom";

const timeSlots = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];
const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    appointmentDate: "",
    appointmentSlot: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setErrors({
    //   ...errors,
    //   [name]: "",
    // });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const today = new Date();
    const selectedDate = new Date(formData.appointmentDate);
    if (selectedDate < today) {
      alert("Please choose a date starting from today");
      return;
    }
    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };
  const navigate = useNavigate();

  return (
    <div className="BODY" style={{ height: 850 }}>
      <div className="appointment">
        <div className="form">
          {isSubmitted ? (
            navigate("/otherinfo")
          ) : (
            // Confirmation page
            // <div>
            /* <h2>Booking Confirmation</h2>
              <p>Name: {formData.fullName}</p>
              <p>Mobile Number: {formData.mobileNumber}</p>
              <p>Email Address: {formData.emailAddress}</p>
              <p>Date: {formData.appointmentDate}</p>
              <p>Time Slot : {formData.appointmentSlot}</p> */

            /* <button className="print" onClick={handlePrint}>
                Print
              </button> */
            // </div>

            // Booking form
            <form onSubmit={handleSubmit}>
              <h2>Booking Appointment</h2>
              <div className="input-box">
                <FaUser className="fa" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaPhone className="fa" />
                <input
                  type="number"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="fa" />
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Enter Email Address"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                {/* <label>Date:</label> */}
                <FaCalendar className="fa" />
                <input
                  type="date"
                  name="appointmentDate"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Time Slot:</label>
                <select
                  name="appointmentSlot"
                  onChange={(e) => handleInputChange(e)}
                  required
                >
                  <option value="" disabled>
                    Select Time Slot
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-box">
                <input type="submit" value="Submit" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;