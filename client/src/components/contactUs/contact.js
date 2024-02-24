
import React from "react";
//import backgroundImage from "./smile.jpg"; // Import the image

const ContactUs=()=>{
    return ( 
      <section className="py-5">
      {/* Blurred background div */}
      <div
        className="blurry-background"
        alt="Counsellor 1"
        style={{
          //backgroundImage: `url(${backgroundImage})`,
          filter: "blur(8px)",
          position: "fixed",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit:'contain',
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          
        }}
      ></div>

        <div className = "container mt-5 center-content" style={{height:1000}}>
            <center><u><h2> Contact Us</h2></u></center>
            <section className="mb-5 card">
        <h3>Contact Details of Counsellors</h3>
        <ul>
          <li>
            <strong>Counselor 1:</strong> Deepak Kumar Phogat
            <br />
            Email:<a href="mailto:deepak.phogat@iitrpr.ac.in">deepak.phogat@iitrpr.ac.in  </a>
            <br />
            Phone: +1 (555) 123-4567
          </li>
          <li>
            <strong>Counselor 2:</strong> Gargi Tiwari
            <br />
            Email:<a href="mailto:gargi.tiwari@iitrpr.ac.in">gargi.tiwari@iitrpr.ac.in</a>
            <br />
            Phone: +1 (555) 987-6543
          </li>
        </ul>
      </section>
      {/* Contact Details of Faculty Advisors Section */}
      <section className="mb-5 card">
        <h3>Contact Details of Faculty Advisors</h3>
        <ul>
          <li>
            <strong>Faculty Advisor 1:</strong> Dr. Satyam Agarwal
            <br />
            Email: <a href="mailto:satyam@iitrpr.ac.in">satyam@iitrpr.ac.in</a>
            <br />
            Phone: +1 (555) 111-2222
          </li>
          <li>
            <strong>Faculty Advisor 2:</strong> Dr. Sudeepta Mishra
            <br />
            Email: <a href="mailto:sudeepta@iitrpr.ac.in">sudeepta@iitrpr.ac.in</a>
            <br />
            Phone: +1 (555) 333-4444
          </li>
          {/* Add more faculty advisor details as needed */}
        </ul>
      </section>
      {/* Contact Details of Snehita Buddies Section */}
      <section className="card">
        <h3>Contact Details of Snehita Buddies</h3>
        <ul>
          <li>
            <strong>Snehita Buddy 1:</strong> Manav Chauhan
            <br />
            Email: <a href="mailto:2021csb1108@iitrpr.ac.in">2021csb1108@iitrpr.ac.in</a>
            <br />
            Phone: +1 (555) 555-5555
          </li>
          <li>
            <strong>Snehita Buddy 2:</strong> Nikhil Garg
            <br />
            Email: <a href="mailto:2021csb1114@iitrpr.ac.in">2021csb1114@iitrpr.ac.in</a>
            <br />
            Phone: +1 (555) 666-6666
          </li>
          {/* Add more Snehita Buddy details as needed */}
        </ul>
      </section>

        </div>
        
      </section>
    );  
}
export default ContactUs;