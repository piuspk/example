import React from "react";
// import backgroundImage from "./smile.jpg"; // Import the image

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "#054854", marginTop: "-100px", paddingTop: "100px", paddingBottom: "60px" }}>
      <div className="container">

        <div className="row page-head-holder">
          <p className="page-head" style={{ color: "#fff", marginTop: "40px" }}>
            CONTACT US
          </p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="row footer-cat">
              <span style={{ marginBottom: "30px", color: "#eee" }}>Address</span>
            </div>
            <div className="row" style={{ marginLeft: "20px",color:"white" }}>
              <div className="footer-add" >
                Snehita Well Being Cell<br/>
                Main Campus<br />
                Indian Institute of Technology Ropar<br />
                Rupnagar<br />
                Punjab, INDIA 140001<br /><br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row footer-cat">
              <span style={{ marginBottom: "30px", color: "#eee" }}>Phone</span>
            </div>
            <div className="row" style={{ marginLeft: "20px" , color:"white"}}>
              <div className="footer-add">
                <i className="fa fa-phone" aria-hidden="true"></i> +91-1881-227078 <br />
                <i className="fa fa-phone" aria-hidden="true"></i> +91-1881-223395 <br /><br /><br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6842.171798211328!2d76.46966899063011!3d30.96808497283615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390554d4ffffffff%3A0xb81f1e2708c91100!2sIndian%20institute%20of%20Technology%20Ropar!5e0!3m2!1sen!2sin!4v1593175269344!5m2!1sen!2sin" width="100%" height="250" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>

        
        
        

      </div>

      {/* Team section */}
      {/* Team section */}
<div className="container" style={{ marginBottom: "50px" }}>
  <div className="row page-head-holder">
    <p className="page-head" style={{ marginTop: "40px" , color:"white"}}>
      TEAM
    </p>
  </div>

  

  {/* Add more rows for additional team members if needed */}
</div>
<div className="container" style={{ marginBottom: "50px" , color:"white"}}>
      {/* Counsellors Row */}
      <div className="row">
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='/sky.jpeg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />counsellor1@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 123-4567
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Counsellor 1</div>
              <div className='post'>COUNSELLOR</div>
              <div className='contact'>
                <a href='mailto:counsellor1@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15551234567' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='images/team/faculty/counsellor2.jpg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />counsellor2@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 987-6543
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Counsellor 2</div>
              <div className='post'>COUNSELLOR</div>
              <div className='contact'>
                <a href='mailto:counsellor2@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15559876543' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Row */}
      <div className="row">
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='sky.jpeg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />faculty1@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 111-2222
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Faculty 1</div>
              <div className='post'>FACULTY</div>
              <div className='contact'>
                <a href='mailto:faculty1@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15551112222' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='images/team/faculty/faculty2.jpg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />faculty2@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 333-4444
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Faculty 2</div>
              <div className='post'>FACULTY</div>
              <div className='contact'>
                <a href='mailto:faculty2@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15553334444' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snehita Buddies Row */}
      <div className="row">
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='images/team/snehita/snehita1.jpg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />snehita1@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 555-5555
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Snehita Buddy 1</div>
              <div className='post'>SNEHITA BUDDY</div>
              <div className='contact'>
                <a href='mailto:snehita1@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15555555555' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='our-team'>
            <div className='pic'>
              <img src='images/team/snehita/snehita2.jpg' alt='' />
              <div className='hidden-contact'>
                <i className='fa fa-envelope' aria-hidden='true'></i><br />snehita2@example.com<br />
                <i className='fa fa-phone' aria-hidden='true'></i><br />+1 (555) 666-6666
              </div>
            </div>
            <div className='detail'>
              <div className='title'>Snehita Buddy 2</div>
              <div className='post'>SNEHITA BUDDY</div>
              <div className='contact'>
                <a href='mailto:snehita2@example.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope' aria-hidden='true'></i></a>
                <a href='tel:+15556666666' target='_blank' rel='noopener noreferrer'><i className='fa fa-phone' aria-hidden='true'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button to Direct to Another Page */}
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-12 text-center">
          <a className="btn btn-primary" href="/team-page" role="button">View Full Team</a>
        </div>
      </div>
    </div>

    </div>
  );
}
export default ContactUs;
