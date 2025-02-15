import { useEffect, useState } from "react";
import api from "./api";

function GetLogin({ id }) {
  const [data, setData] = useState({
    id: 0,
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      const response = await api.get(`/users/${id}`);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  return data;
}

export default GetLogin;
