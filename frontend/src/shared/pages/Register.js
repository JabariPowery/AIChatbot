import classes from "../components/Login.module.css";
// import GetLogin from "../server/GetLogin";
import api from "../server/api";
// import { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [data, setData] = useState({
  //   id: 0,
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const postData = async (user) => {
    await api.post(`/users/`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  };

  const registerHandler = (data) => postData(data);

  return (
    <>
      <h1>Register new account</h1>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit(registerHandler)}>
          <input type="text" {...register("username", { required: true })} />
          {/* {errors.username && <span className={classes.formError}>Username is required</span>} */}
          <input type="email" {...register("email", { required: true })} />
          {/* {errors.email && <span className={classes.formError}>Email is required</span>} */}
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {/* {errors.password && <span className={classes.formError}>password is required</span>} */}
          <input type={"submit"} className={classes.formSubmit} />
        </form>
      </div>
    </>
  );
}

export default Register;
