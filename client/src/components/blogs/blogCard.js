import "./blogCard.css";
import blogImage from '../assets/first.jpg';
import FilledButton from "../templates/filledButton";
const BlogCard = (props) => {
  return (
    <div className="card shadow bg-white rounded mx-3 ">
      <img src={props.imageSrc?props.imageSrc:blogImage} className="card-img-top " alt="" />
      <div
        className="card-body"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <h5 className="card-title">
          {props.cardHeading ? props.cardHeading : "Card Heading"}
        </h5>
        <p className="card-text">
          {props.cardDescription
            ? props.cardDescription
            : "This is a longer card with supporting text below as a natural lead-into additional content. This content is a little bit longer."}
        </p>
        <div className="d-flex justify-content-center ">
        {props.link?<FilledButton buttonColor={"secondary"}>Read More</FilledButton>:""}
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
