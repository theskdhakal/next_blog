import prisma from "../../../lib/prisma";

export const POST = async (request: any) => {
  console.log("the incoming request is:", request.json());
  try {
    const formData = await request.json();

    const fName = formData.fName || "";
    const lName = formData.lName || "";
    const email = formData.email || "";
    const password = formData.password || "";

    console.log(fName);
    const newUser = await prisma.user.create({
      data: {
        fName,
        lName,
        email,
        password,
      },
    });

    // return Response.redirect(`${process.env.NEXTAUTH_URL}`);

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: {
        "content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("failed to add new user", { status: 500 });
  }
};
