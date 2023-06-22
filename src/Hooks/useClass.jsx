import { useEffect, useState } from "react";

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-five-lake.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return [classes, loading];
};

export default useClass;
