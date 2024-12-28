import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState({
    id: 0,
    name: "",
  });

  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:3306/");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default Test;
