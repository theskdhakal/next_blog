//add user to database
export const addUser = async (formData: any) => {
  const { fName, lName, email, password } = formData;
  const response = await fetch("/api/auth/router", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fName, lName, email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to add user");
  }

  return await response.json();
};
