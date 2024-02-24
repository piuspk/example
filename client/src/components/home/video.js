import video1 from "../assets/campusVideo.mp4";
import "./video.css";
const Video = () => {
  return (
    <div>
      <div className="video-background">
        <video src={video1} autoPlay loop muted className="videoPlayer" />
      <div className=" video-overlay">
        <div className="row">
          <div className="col col-md-8 text-white video-info ">
            <h1> 
                <span>SNEHITA</span> 
                <br/>
            WELL BEING</h1>
            <p> Transforming Lives, Resolving Cases,Nurturing Minds, 
              <br/>and Cultivating Resilience at 
                <br/>IIT Ropar, a beacon of support.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Video;
