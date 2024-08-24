"use client";
import { useState } from "react";
import React from "react";
import CustomInput from "../../component/CustomInput";
import { loginInput } from "../../component/InputField";

export interface FormState {
  email: string;
  password: string;
}

const initialFormState: FormState = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialFormState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "100vh" }}
    >
      <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
        <form className="d-grid p-3" onSubmit={handleOnLogin}>
          {loginInput.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <button
            type="submit"
            className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
