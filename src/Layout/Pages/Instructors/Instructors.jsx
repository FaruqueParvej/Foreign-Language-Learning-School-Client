import { Helmet } from "react-helmet-async";
import useClass from "../../../Hooks/useClass";
import InstructorInfo from "./InstructorInfo";

const Instructors = () => {
  const [classes] = useClass();
  return (
    <div>
      <Helmet>
        <title>FLLS | Instructors</title>
      </Helmet>
      <div className="">
        <h2 className="w-50 text-5xl text-center text-red-900 border-y-2 py-2 my-2">
          Our Instructors
        </h2>
      </div>
      <div className="grid md:grid-cols-3">
        {classes.map((item, index) => (
          <InstructorInfo key={index} item={item}></InstructorInfo>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
