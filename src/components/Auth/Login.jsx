"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(8)});

const Login = ({ setRoute, setOpen }) => {
  const [show, setShow] = useState(false);
  const [login, { isSuccess, isError, error }] = useLoginMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Succesfully");
      setOpen(false);
      navigate("/rooms")
      window.location.reload();
    }

    if (isError) {
      if ("data" in error) {
        const errorData = error;
        toast.error(errorData.data.message);
      }
    }
  }, [error, isError, isSuccess, setOpen]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-full">
      <h1
        className={`${"text-[25px] text-black font-[500] font-Poppins text-center py-2 "}`}
      >
        {/* Login with SafeChild */}
        SafeChild-т нэвтрэх
      </h1>
      <form onSubmit={handleSubmit}>
        <label className={`${"text-[16px] font-Poppins text-black "}`}>
          Имэйл хаяг оруулна уу 
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${
            errors.email && touched.email && "border-red-500"
          } ${"w-full text-black bg-white border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins"}`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${"text-[16px] font-Poppins text-black "}`}>
            Нууц үгээ оруулна уу
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${"w-full text-black bg-white border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins"}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-2 right-2 z-4 cursor-pointer text-black"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-2 right-2 z-4 cursor-pointer text-black"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.password && errors.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}
        <div className="w-full mt-5">
          <input
            type="submit"
            value="Нэвтрэх"
            className={`${"flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#00BFFF] min-h-[45px] w-full text-[16px] font-Poppins font-semibold text-black"}`}
          />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black">
          Бүртгэлгүй бол?{" "}
          <span
            className="text-[#00BFFF] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Бүртгүүлэх
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;