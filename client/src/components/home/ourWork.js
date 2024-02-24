import BlogCard from "../blogs/blogCard";
import counsellingImage from  '../assets/Counselling.jpg';
import solvedImage from  '../assets/SolvedCases.jpg';
import redFlagImage from  '../assets/RedFlagCases.jpg';
const OurWork=()=>{
   const workInfo=[
    {
      cardHeading:"Counselled 600+ students",
      cardDescription:"Snehita at IIT Ropar has offered counseling to over 600 students, playing a vital role in supporting their mental health, fostering a healthier campus environment."
    },
    {
      cardHeading:"Solved 1000+ cases",
      cardDescription:"Snehita at IIT Ropar has made a positive impact on more than 1000 cases, nurturing a supportive environment and advancing overall well-being within the campus community."
    },
    {
      cardHeading:"150+ Red Flagged cases",
      cardDescription:"Addressed and resolved over 150 red-flagged cases, showcasing Snehita's commitment to promoting a secure and thriving campus environment at IIT Ropar."
    },
   ]
    return (
        <div className="mb-5">
      <h1 className="d-flex justify-content-center py-3">ACHIEVEMENTS</h1>
      <div className="container">
        <div className="mx-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          <div className="col">
            <BlogCard imageSrc={counsellingImage} cardHeading={workInfo[0].cardHeading} cardDescription={workInfo[0].cardDescription} />
          </div>
          <div className="col">
            <BlogCard imageSrc={solvedImage} cardHeading={workInfo[1].cardHeading} cardDescription={workInfo[1].cardDescription} />
          </div>
          <div className="col">
            <BlogCard imageSrc={redFlagImage} cardHeading={workInfo[2].cardHeading} cardDescription={workInfo[2].cardDescription} />
          </div>
        </div>  
      </div>
    </div>
    );
}
export default OurWork;