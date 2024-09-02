"use client";
import { useState } from "react";
import React from "react";
import CustomInput from "../../component/CustomInput";
import { loginInput } from "../../component/InputField";
import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/navigation";
import { setUser } from "@/utils/userSlice";

export interface FormState {
  email: string;
  password: string;
}

const initialFormState: FormState = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("form is,", JSON.stringify(form));
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Send data as JSON
        },
        body: JSON.stringify(form), // Convert form data to JSON
      });

      if (response.ok) {
        const user = await response.json();

        // Dispatch the user to Redux
        dispatch(setUser(user));
        router.push("/");
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "100vh" }}
    >
      <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
        <form className="d-grid p-3" onSubmit={handleLogin}>
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
