import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const statusHandler = (id, data) => {
    fetch(`https://server-five-lake.vercel.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
          Swal.fire({
            title: "success!",
            text: "Status updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Classes: {allClasses.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Si</th>
              <th className="px-4 py-2">Class Image</th>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Instructor Name</th>
              <th className="px-4 py-2">Instructor Email</th>
              <th className="px-4 py-2">Available Seats</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={item.classImage} className="w-1/2" alt="" />
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                  <div className="space-x-2">
                    <button
                      disabled={
                        item.status === "Approved" || item.status === "Denied"
                      }
                      className="btn btn-primary"
                      onClick={() => statusHandler(item._id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      disabled={
                        item.status === "Approved" || item.status === "Denied"
                      }
                      className="btn btn-secondary"
                      onClick={() => statusHandler(item._id, "Denied")}
                    >
                      Deny
                    </button>
                    <button className="btn btn-primary">Send Feedback</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
