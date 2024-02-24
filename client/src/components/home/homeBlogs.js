// import { Link } from "react-router-dom";
import BlogCard from "../blogs/blogCard";
import Button from "../templates/button";
const HomeBlogs = () => {
  return (
    <div className="mb-5">
      <h1 className="d-flex justify-content-center py-3">BLOGS</h1>
      <div className="container">
        <div className="mx-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          <div className="col">
            <BlogCard link="a"/>
          </div>
          <div className="col">
            <BlogCard link="a"/>
          </div>
          <div className="col">
            <BlogCard link="a"/>
          </div>
        </div>
      <div className="d-flex justify-content-center mx-auto py-3 " to="/blogs">
      <Button color={"secondary"}>More Blogs</Button>
      </div>
      </div>
    </div>
  );
};
export default HomeBlogs;
