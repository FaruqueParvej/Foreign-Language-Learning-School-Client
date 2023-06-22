import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProviders/AuthProvider";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("https://server-five-lake.vercel.app/addClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Class added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/dashboard/myClasses");
        }
      });
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mx-auto p-4 bg-white rounded shadow my-4"
      >
        <div className="mb-2">
          <label htmlFor="className" className="block mb-2 text-lg font-medium">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register("className")}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="classImage"
            className="block mb-2 text-lg font-medium"
          >
            Class Image Url
          </label>
          <input
            type="text"
            id="classImage"
            {...register("classImage")}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="instructorName"
            className="block mb-2 text-lg font-medium"
          >
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={user?.displayName}
            readOnly
            {...register("instructorName")}
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="instructorEmail"
            className="block mb-2 text-lg font-medium"
          >
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            value={user?.email}
            readOnly
            {...register("instructorEmail")}
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="availableSeats"
            className="block mb-2 text-lg font-medium"
          >
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register("availableSeats")}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="price" className="block mb-2 text-lg font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price")}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;
