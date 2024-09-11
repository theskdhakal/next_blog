import prisma from "../../../lib/prisma";

export const POST = async (request: any) => {
  try {
    const formData = await request.json();

    const title = formData.title || "";
    const post = formData.post || "";
    const author = formData.author || "";
    const authorId = formData.authorId || "";

    const newPost = await prisma.post.create({
      data: {
        title,
        post,
        author,
        authorId,
      },
    });

    // return Response.redirect(`${process.env.NEXTAUTH_URL}`);

    return new Response(JSON.stringify(newPost), {
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

export const GET = async () => {
  try {
    const allPosts = await prisma.post.findMany();

    return new Response(JSON.stringify(allPosts), {
      status: 200,
      headers: {
        "content-Type": "aplication/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("failed to retrieve posts.", { status: 500 });
  }
};
