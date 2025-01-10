import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState({
    id: 0,
    name: "",
  });

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3306/users/1");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default Test;
