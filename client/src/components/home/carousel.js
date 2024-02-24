import firstimage from '../assets/first.jpg';
import secondimage from '../assets/second.jpg';
import thirdimage from '../assets/third.jpg';
const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade " data-bs-ride='carousel' data-bs-interval={1500}>
      
      <div className="carousel-inner container">
        <div className="carousel-item active">
          <img src={firstimage} style={{height:600}} className="d-block w-100 h-auto  " alt="First" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Together</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={secondimage} style={{height:600}} className="d-block w-100 h-auto " alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Peace</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={thirdimage} style={{height:600}} className="d-block w-100 h-auto " alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Happiness</h5>
          </div>
        </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  );
};
export default Carousel;
