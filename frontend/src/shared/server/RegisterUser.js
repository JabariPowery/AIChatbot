import api from "./api";
import { useEffect, useState } from "react";
import Register from "../pages/Register";

function RegisterUser(user) {
  const [data, setData] = useState({
    id: 0,
    username: "",
    email: "",
    password: "",
  });

  //   useEffect(() => {
  const postData = async (user) => {
    // const response = await api.post(`/users/`, {
    //   username: user.username,
    //   email: user.email,
    //   password: user.password,
    // });
    await api.post(`/users/`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    // console.log(response.data);
    // setData(response.data);
  };
  //     postData();
  //   }, [user]);

  return <Register postData={postData} />;
}

export default RegisterUser;
