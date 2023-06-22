import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FLLS | Home</title>{" "}
      </Helmet>
      <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
