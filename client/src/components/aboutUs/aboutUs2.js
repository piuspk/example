import React from "react";
import "./aboutUs2.css";
import { TbTargetArrow } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
const AboutUs2Page = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row page-heading">
          <p className="page-head">ABOUT US</p>
        </div>
        <div className="row">
          <div className="nav-bar-back">
            <ul
              className="nav nav-pills mb-3 mx-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active aboutUsFilter"
                  id="pills-aim-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-aim"
                  type="button"
                  role="tab"
                  aria-controls="pills-aim"
                  aria-selected="true"
                >
                  
                  SNEHITA
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link aboutUsFilter"
                  id="pills-mission-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mission"
                  type="button"
                  role="tab"
                  aria-controls="pills-mission"
                  aria-selected="false"
                >
                  <div className="d-flex flex-column  position-relative ">
                    <div className="postion-relative justify-content-center "><TbTargetArrow size={40} /></div>
                  
                  MISSION AND VISION
                  </div>
                </button>
              </li>
              <li className="nav-item aboutUsFilter" role="presentation">
                <button
                  className="nav-link aboutUsFilter"
                  id="pills-deanMessage-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-deanMessage"
                  type="button"
                  role="tab"
                  aria-controls="pills-deanMessage"
                  aria-selected="false"
                >
                  <div className="d-flex flex-column position-relative ">
                  <div className="postion-relative justify-content-center "><FaEnvelope size={40} /></div>
                  </div>
                  DEAN'S MESSAGE
                  
                </button>
              </li>
            </ul>
          </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-aim"
            role="tabpanel"
            aria-labelledby="pills-aim-tab"
            tabindex="0"
          >
            <div className="col-12 text-center">
              <p className="lead text-black ">
                IIT Ropar has a dedicated system to cater to the mental health
                and counseling needs of the students, faculties, and staff. Our
                system is working towards addressing the psychological
                difficulties of the students and promoting wellness across the
                entire campus community. We aim to create a proactive and
                preventative environment for mental health care, increasing
                help-seeking behavior, removing the fear of stigma, and making
                counseling services more user-friendly.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad accusamus explicabo molestiae magni veritatis esse hic, recusandae nemo totam laboriosam aperiam beatae iure distinctio ut porro eveniet alias architecto quas dicta exercitationem harum! Fuga veritatis impedit in earum, autem repudiandae dolor itaque blanditiis dolorum excepturi numquam tenetur natus doloribus ducimus, saepe nulla cum eaque nisi atque omnis. Vero sed aliquid architecto magnam commodi ab aut suscipit tempora culpa, repellendus nemo eligendi laboriosam porro possimus quia minus magni ea nisi. Facere at quisquam sapiente eum rerum magni, nam optio consequuntur saepe id, quas libero odit minima laborum incidunt modi reiciendis.
                
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-mission"
            role="tabpanel"
            aria-labelledby="pills-mission-tab"
            tabindex="0"
          >
            <p className="lead text-black ">
              IIT Ropar has a dedicated system to cater to the mental health and
              counseling needs of the students, faculties, and staff. Our system
              is working towards addressing the psychological difficulties of
              the students and promoting wellness across the entire campus
              community. We aim to create a proactive and preventative
              environment for mental health care, increasing help-seeking
              behavior, removing the fear of stigma, and making counseling
              services more user-friendly.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad accusamus explicabo molestiae magni veritatis esse hic, recusandae nemo totam laboriosam aperiam beatae iure distinctio ut porro eveniet alias architecto quas dicta exercitationem harum! Fuga veritatis impedit in earum, autem repudiandae dolor itaque blanditiis dolorum excepturi numquam tenetur natus doloribus ducimus, saepe nulla cum eaque nisi atque omnis. Vero sed aliquid architecto magnam commodi ab aut suscipit tempora culpa, repellendus nemo eligendi laboriosam porro possimus quia minus magni ea nisi. Facere at quisquam sapiente eum rerum magni, nam optio consequuntur saepe id, quas libero odit minima laborum incidunt modi reiciendis.
              
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-deanMessage"
            role="tabpanel"
            aria-labelledby="pills-deanMessage-tab"
            tabindex="0"
          >
            <p className="lead text-black ">
              IIT Ropar has a dedicated system to cater to the mental health and
              counseling needs of the students, faculties, and staff. Our system
              is working towards addressing the psychological difficulties of
              the students and promoting wellness across the entire campus
              community. We aim to create a proactive and preventative
              environment for mental health care, increasing help-seeking
              behavior, removing the fear of stigma, and making counseling
              services more user-friendly.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad accusamus explicabo molestiae magni veritatis esse hic, recusandae nemo totam laboriosam aperiam beatae iure distinctio ut porro eveniet alias architecto quas dicta exercitationem harum! Fuga veritatis impedit in earum, autem repudiandae dolor itaque blanditiis dolorum excepturi numquam tenetur natus doloribus ducimus, saepe nulla cum eaque nisi atque omnis. Vero sed aliquid architecto magnam commodi ab aut suscipit tempora culpa, repellendus nemo eligendi laboriosam porro possimus quia minus magni ea nisi. Facere at quisquam sapiente eum rerum magni, nam optio consequuntur saepe id, quas libero odit minima laborum incidunt modi reiciendis.
              
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
        </div>

      </div>

      {/* <div className="container">
        <div className="row gy-4">
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

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="mb-4" style={{ color: 'white' }}>Snehita Buddies</h3>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="card mx-2 mb-4" style={{ width: "200px" }}>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs2Page;
