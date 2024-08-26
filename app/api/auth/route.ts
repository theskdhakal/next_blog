import prisma from "../../../lib/prisma";

export const POST = async (request: any) => {
  try {
    const formData = await request.formData();

    const fName = formData.get("fName").toString() || "";
    const lName = formData.get("lName").toString() || "";
    const email = formData.get("email").toString() || "";
    const password = formData.get("password").toString() || "";

    console.log(fName);
    const newUser = await prisma.user.create({
      data: {
        fName,
        lName,
        email,
        password,
      },
    });

    return Response.json(
      { message: "new user created", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response("failed to add new user", { status: 500 });
  }
};
