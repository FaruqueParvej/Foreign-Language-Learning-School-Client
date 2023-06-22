const InstructorInfo = ({ item }) => {
  const { instructorName, instructorImage, studentsNum } = item;
  return (
    <div className="my-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={instructorImage} alt="instructor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
        </div>
        <button className="btn btn-outline">Enroll</button>
      </div>
    </div>
  );
};

export default InstructorInfo;
