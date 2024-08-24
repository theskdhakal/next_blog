import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

//utility function to handle user registration
const handleUserRegistration = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { fName, lName, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        fName,
        lName,
        email,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user|:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

//Main API handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await handleUserRegistration(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
