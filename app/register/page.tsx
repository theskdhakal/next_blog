"use client";
import React, { useEffect, useState } from "react";
import { userInput } from "../../component/InputField";
import CustomInput from "../../component/CustomInput";
import { useAppDispatch } from "@/hooks";
import { setUser } from "@/utils/userSlice";

interface FormState {
  [key: string]: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({});
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("form is,", JSON.stringify(form));
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Send data as JSON
        },
        body: JSON.stringify(form), // Convert form data to JSON
      });

      console.log("response is:", response);

      if (response.ok) {
        const user = await response.json();
        // Dispatch the user to Redux
        dispatch(setUser(user));
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
        {mounted && (
          <form className="d-grid p-3" onSubmit={handleRegister}>
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
        )}
      </div>
    </div>
  );
};

export default Register;
