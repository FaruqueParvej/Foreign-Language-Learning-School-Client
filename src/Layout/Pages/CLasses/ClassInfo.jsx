import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const ClassInfo = ({ item }) => {
  const { instructorName, availableSeats, price, classImage, className } = item;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const isDisabled = availableSeats == 0 || isAdmin || isInstructor;

  return (
    <div className="my-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={classImage} alt="instructor" />
        </figure>
        <div
          className={`card-body p-4 rounded-md ${
            availableSeats == 0 ? "bg-red-500" : "bg-white-500"
          }`}
        >
          <h2 className="card-title">{className}</h2>
          <p>Instructor Name: {instructorName}</p>
          <p>Available seat: {availableSeats}</p>
          <p>Price: {price}</p>
        </div>
        <button
          className={`btn btn-outline bg-blue-500 text-white px-4 py-2 rounded-md ${
            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={isDisabled}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassInfo;
