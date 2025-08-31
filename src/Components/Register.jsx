//! React Hook Form used for form handling and validation

import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { formContext } from "./Wrapper";

function Register() {
  
    const [Users, setUsers] = useContext(formContext)
    console.log(Users);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {

    if (data.name === "" && data.age === "" && data.email === "") return;
    if (data.age < 1) return;
    // const newUser = { id: nanoid(), ...data }
    // setUsers([...Users, newUser])
    const copyUser = [...Users];
    copyUser.unshift({ id: nanoid(), ...data });
    setUsers(copyUser);
    toast.success("User Registered Successfully",  {
  style: {
    backgroundColor: 'white',
    border: '2px solid white',
    color: 'black',
    fontSize: '16px'
  }
});
  
    reset();
  };

  return (
    <div className="flex flex-col w-[40%] items-center bg-gray-800 p-5 rounded-lg">
      <h1 className="text-3xl font-light">
        <span className="text-pink-500">Register</span> User
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col mt-5 bg-gray-900 p-5 rounded-lg w-[85%]"
      >
        <input
          {...register("name", { required: "Name can not be empty" })}
          type="text"
          placeholder="Username"
          className="m-2 p-2 text-black    w-[90%] border-b-2 border-white outline-none text-white bg-zinc-700 rounded-t-lg text-lg  "
        />

        {/* {errors.name && errors.name.message &&<small>{errors.name.message}</small>} */}
        <small className="text-red-400">{errors?.name?.message} </small>
        <input
          {...register("age", { required: " Age can not be empty" })}
          type="number"
          placeholder="Age"
          className="m-2 p-2 text-black  w-[90%]  border-b-2 border-white outline-none text-white bg-zinc-700 rounded-t-lg text-lg"
        />
        {/* {errors.age && errors.age.message &&<small>{errors.age.message}</small>} */}
        <small className="text-red-400">{errors?.age?.message} </small>

        <input
          {...register("email", { required: " Email can not be empty" })}
          type="email"
          placeholder="Email"
          className="m-2 p-2 text-black  w-[90%]  border-b-2 border-white outline-none text-white bg-zinc-700 rounded-t-lg text-lg"
        />
        {/* {errors.email && errors.email.message &&<small>{errors.email.message}</small>} */}
        <small className="text-red-400">{errors?.email?.message} </small>

        <button className="m-2 p-2 bg-blue-500 rounded-lg hover:bg-blue-700 w-[90%] text-white font-bold active:scale-95">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;
