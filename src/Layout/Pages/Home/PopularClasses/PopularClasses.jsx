import { Flip } from "react-awesome-reveal";
import useClass from "../../../../Hooks/useClass";
import Popclassescard from "./Popclassescard";

const PopularClasses = () => {
  const [classes] = useClass();
  const popClasses = classes.filter(
    (item) => item.category === "popular_class"
  );
  console.log(popClasses);
  return (
    <div>
      <div className="">
        <h2 className="w-50 text-5xl text-center text-red-900 border-y-2 py-2 my-2">
          Popular Classes
        </h2>
      </div>
      <div className="grid md:grid-cols-3">
        {popClasses.map((item, index) => (
          <Flip cascade key={index}>
            <Popclassescard key={index} item={item}></Popclassescard>
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
