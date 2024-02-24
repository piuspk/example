import Articles from "./articles";
import Quotes from "./quotes";
import "./blogs.css";
const Blogs = () => {
  return (
    <div>
      {/* <hr className="mx-4"/> */}
      <div className="pb-3 quotes-custom">
        <h1 className="d-flex justify-content-center py-2">QUOTES</h1>
        <div className="container">
          <Quotes />
        </div>
      </div>
      <div className="articles pb-3 ">
        <h1 className="d-flex justify-content-center py-3">BLOGS</h1>
        <div className="container">
          <Articles />
        </div>
      </div>
    </div>
  );
};
export default Blogs;
