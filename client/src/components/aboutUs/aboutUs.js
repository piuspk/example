import React from "react";
import backgroundImage from "./campus.jpg"; // Import the image

const AboutUsPage = () => {
  return (
    <section className="py-5">
      {/* Blurred background div */}
      <div
        className="blurry-background"
        alt="Counsellor 1"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-4" style={{ color: 'white', fontWeight: 'bold' }}>Aim of the Snehita Well Being</h2>
            <p className="lead" style={{ color: 'white', fontFamily:'cursive' }}>
              IIT Ropar has a dedicated system to cater to the mental health and
              counseling needs of the students, faculties, and staff. Our system
              is working towards addressing the psychological difficulties of
              the students and promoting wellness across the entire campus
              community. We aim to create a proactive and preventative
              environment for mental health care, increasing help-seeking
              behavior, removing the fear of stigma, and making counseling
              services more user-friendly.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
        <div className="row gy-4">
          {/* Counsellors Section */}
          <div className="col-md-6  mb-4 ">
            <div className="card h-100 shadow" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://www.iitrpr.ac.in/sites/default/files/Deepakphogat.jpg"
                    className="img-fluid rounded-start"
                    alt="Counsellor 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Deepak Kumar Phogat</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6  mb-4">
            <div className="card h-100 shadow">
              {" "}
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://s3.amazonaws.com/media.mixrank.com/profilepic/75ca5043c62596b5db08c58d4a33f29f"
                    className="img-fluid rounded-start"
                    alt="Counsellor 1"
                    style={{
                      width: "100%",
                      height: "100%",
                  
                      
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" >Gargi Tiwary</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Advisor Section */}
          <div className="col-md-6  mb-4">
            <div className="card h-100 shadow"> <div className="row g-0">
                 <div className="col-md-4">
                   <img src="https://www.iitrpr.ac.in/sites/default/files/Deepakphogat.jpg" className="img-fluid rounded-start" alt="Counsellor 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">Faculty Advisor - Satyam Agarwal</h5>
                     <p className="card-text">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                 </div>
               </div></div>
          </div>

          {/* Dean Student Affairs Section */}
          <div className="col-md-6  mb-4">
            <div className="card h-100 shadow"> <div className="row g-0">
                 <div className="col-md-4">
                   <img src="https://www.iitrpr.ac.in/sites/default/files/Deepakphogat.jpg" className="img-fluid rounded-start" alt="Counsellor 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">Deepak Kumar Phogat</h5>
                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                 </div>
               </div></div>
          </div>
        </div>

        {/* Snehit Buddies Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="mb-4" style={{ color: 'white' }}>Snehita Buddies</h3>
            <div className="d-flex flex-wrap justify-content-center">
              {/* Repeat this card for each buddy */}
              <div className="card mx-2 mb-4" style={{ width: "200px" }}>
                {/* Card content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
