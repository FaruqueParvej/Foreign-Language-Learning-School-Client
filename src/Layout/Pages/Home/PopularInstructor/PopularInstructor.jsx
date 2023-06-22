import { Fade } from "react-awesome-reveal";
import useClass from "../../../../Hooks/useClass";
import PopInstructorCard from "./PopInstructorCard";

const PopularInstructor = () => {
  const [classes] = useClass();
  const popInstructor = classes.filter(
    (item) => item.category === "popular_instructor"
  );
  console.log(popInstructor);
  // console.log(classes);
  return (
    <>
      <div className="my-4">
        <h2 className="w-50 text-5xl text-center text-red-900 border-y-2 py-2 ">
          Popular Instructors
        </h2>
      </div>
      <div className="grid md:grid-cols-3">
        {popInstructor.map((item, index) => (
          <Fade duration={3000} cascade key={index}>
            <PopInstructorCard key={index} item={item}></PopInstructorCard>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default PopularInstructor;
