import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import "./userForm.css";

const GenInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    entryNumber: "",
    hostelRoom: "",
    courseStream: "",
    facultyAdvisor: "",
    hostelWarden: "",
    fatherName: "",
    fatherContact: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any validation logic if needed

    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="BODY" style={{ height: 850 }}>
      <div className="user-form">
        <div className="form">
          {isSubmitted ? (
            // Confirmation page
            <div>
              <h2>User Data Submission Confirmation</h2>
              {/* Display captured user data */}
              <p>Name: {formData.fullName}</p>
              <p>Age: {formData.age}</p>
              <p>Gender: {formData.gender}</p>
              <p>Entry Number: {formData.entryNumber}</p>
              <p>Hostel & Room Number: {formData.hostelRoom}</p>
              <p>Course & Stream: {formData.courseStream}</p>
              <p>Faculty Advisor: {formData.facultyAdvisor}</p>
              <p>Hostel Warden: {formData.hostelWarden}</p>
              <p>Father's Name: {formData.fatherName}</p>
              <p>Father's Contact: {formData.fatherContact}</p>

              <button className="print" onClick={handlePrint}>
                Print
              </button>
            </div>
          ) : (
            // User data form
            <form onSubmit={handleSubmit}>
              <h2 style={{textAlign: 'center'}}>User Data Form</h2>
              <div className="form-row">
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
                  <FaCalendar className="fa" />
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-box">
                  <FaEnvelope className="fa" />
                  <input
                    type="text"
                    name="entryNumber"
                    placeholder="Enter Entry Number"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <FaEnvelope className="fa" />
                  <input
                    type="text"
                    name="hostelRoom"
                    placeholder="Enter Course & Stream"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="input-box">
                <FaEnvelope className="fa" />
                <input
                  type="text"
                  name="courseStream"
                  placeholder="Enter Hostel & Room Number"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="fa" />
                <input
                  type="text"
                  name="facultyAdvisor"
                  placeholder="Enter Faculty Advisor"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="fa" />
                <input
                  type="text"
                  name="hostelWarden"
                  placeholder="Enter Hostel Warden"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="fa" />
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter Father's Name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <FaPhone className="fa" />
                <input
                  type="text"
                  name="fatherContact"
                  placeholder="Enter Father's Contact"
                  onChange={handleInputChange}
                  required
                />
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

export default GenInfo;
