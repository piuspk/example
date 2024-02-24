import QuoteCard from "./quoteCard";
import './quotes.css';
const Quotes = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 quotes-custom">
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
      <div className="col mb-4 mr-1 ">
        <QuoteCard />
      </div>
    </div>
  );
};
export default Quotes;
