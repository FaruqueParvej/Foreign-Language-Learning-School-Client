import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-content-center items-center">
      <div>
        <img
          src={
            "https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
          }
          alt=""
        />
      </div>
      <div className="text-2xl flex">
        <p className="mx-3 my-auto">Go to</p>
        <Link to="/" className="btn btn-link text-2xl">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
