import axios from "axios";
import { useEffect, useState } from "react";

function GetLogin() {
  const [data, setData] = useState({
    id: 0,
    username: "",
    email: "",
    password: "",
  });

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/users/1");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default GetLogin;
