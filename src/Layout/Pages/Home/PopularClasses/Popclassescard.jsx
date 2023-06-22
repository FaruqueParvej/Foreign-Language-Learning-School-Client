const Popclassescard = ({ item }) => {
  const {
    instructorName,
    instructorImage,
    studentsNum,
    classImage,
    className,
  } = item;
  return (
    <div className="my-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={classImage} alt="instructor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
        </div>
        <button className="btn btn-outline">Enroll</button>
      </div>
    </div>
  );
};

export default Popclassescard;
