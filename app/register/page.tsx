"use client";
import React, { useState } from "react";
import { userInput } from "../../component/InputField";
import CustomInput from "../../component/CustomInput";

interface FormState {
  [key: string]: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    const formData: any = {
      fName: rest.fName || "",
      lName: rest.lName || "",
      email: rest.email || "",
      password: rest.password || "",
    };
  };
  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "100vh" }}
    >
      <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
        <form className="d-grid p-3" onSubmit={handleOnSubmit}>
          {userInput.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <button
              type="submit"
              className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
