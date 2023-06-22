import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProviders/AuthProvider";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  const { user } = useContext(AuthContext);
  const myClasses = classes.filter(
    (item) => item.instructorEmail === user.email
  );
  console.log(myClasses);
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Classes: {myClasses.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td></td>
                <td></td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
