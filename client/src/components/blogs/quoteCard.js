import "./quoteCard.css";
// import RandomColorGenerator from "./randomColorGenerator";
const QuoteCard = (props) => {
  return (
    <div
      className="card custom-quotecard h-100 shadow rounded mx-3 quoteCard-custom "
    >
      <div className="card-body custom-quotecard-body">
        <p className="card-text m-0 ">
          {props.cardDescription
            ? props.cardDescription
            : "This is a longer card with supporting text below as a natural lead-into additional content. This content is a little bit longer."}
        </p>
        <span className="d-flex justify-content-end ">
          -by {props.author ? props.author : "Nikhil Garg"}
        </span>
      </div>
    </div>
  );
};
export default QuoteCard;
