import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(false);
  const [field, setField] = useState();

  const doneSubmit = (data) => {
    setField(data);
    setSubmit(true);
  };
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit(doneSubmit)} className="form">
        {submit ? <h1>Registration Successful!!!</h1> : null}
        <div className="Input-section">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="input"
            {...register("firstName", { required: "Enter First Name" })}
          ></input>
          <span>{errors.firstName?.message}</span>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            {...register("lastName", { required: "Enter last Name" })}
          ></input>
          <span>{errors.lastName?.message}</span>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("Email", {
              required: "Enter your Email",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          ></input>
          <span>{errors.Email?.message}</span>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("Password", { required: "Enter Password",
          minLength: {value:4, message: "Password must be more than 4 characters"},
          maxLength: {value: 20, message: "Password cannot be more than 20 characters }"}
          })}
          ></input>
          <span>{errors.Password?.message}</span>
          <button type="submit" className="btn">Register</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default App;
