import api from "../../../shared/server/api";
import { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState({
    id: 0,
    username: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/users/1");
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  return data;
}

export default Test;
