// import Carousel from "./carousel";
import HomeBlogs from "./homeBlogs";
import Message from "./message";
import OurWork from "./ourWork";
import Video from "./video";
const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <Video/>
      <Message/>
      <OurWork/>
      <hr/>
      <HomeBlogs />
    </div>
  );
};
export default Home;
