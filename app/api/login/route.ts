import prisma from "../../../lib/prisma";

export const POST = async (request: any) => {
  console.log("the incoming request is:", request);
  try {
    const formData = await request.json();

    const email = formData.email || "";
    const password = formData.password || "";

    const user = await prisma.user.findUnique({ where: { email } });

    //check if user exist and password is correct
    if (!user || password !== user.password) {
      console.log("user credentials invalid");
      return new Response("Invalid credentials", { status: 401 });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("failed to add new user", { status: 500 });
  }
};
