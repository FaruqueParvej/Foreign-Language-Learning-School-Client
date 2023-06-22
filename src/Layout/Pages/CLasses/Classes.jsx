import useClass from "../../../Hooks/useClass";
import ClassInfo from "./ClassInfo";

const Classes = () => {
  const [classes] = useClass();
  const approvedClasses = classes.filter((item) => item.status === "Approved");
  console.log(approvedClasses);

  return (
    <div>
      <div className="">
        <h2 className="w-50 text-5xl text-center text-red-900 border-y-2 py-2 my-2">
          Our Classes
        </h2>
      </div>
      <div className="grid md:grid-cols-3">
        {approvedClasses.map((item, index) => (
          <ClassInfo key={index} item={item}></ClassInfo>
        ))}
      </div>
    </div>
  );
};

export default Classes;
