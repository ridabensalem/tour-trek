import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

// Handler for the PUT
export async function PUT(request: Request) {
  // Get the current user
  const currentUser = await getCurrentUser();

  // If there is no current user, return an error response
  if (!currentUser) {
    return NextResponse.error();
  }

  // Parse the request body as JSON
  const body = await request.json();

  // Destructure the required properties from the request body
  const {
    name,
    surname,
    username,
    dateOfBirth,
    email,
    telephone,
    gender,
    image
  } = body;
  
  // Update the user's favoriteIds in the database
  const user = await prisma.user.update({
    where:{id: currentUser.id},
    data: {
      name,
      surname,
      username,
      dateOfBirth,
      email,
      telephone,
      gender,
      image
  }
});

  // Return the created listing as a JSON response
  return NextResponse.json(user);
}
// Handler for the GET request
export async function GET(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const userProfile = await prisma.user.findUnique({
      where: { id: currentUser.id },
      select: {
        username: true,
        name: true,
        surname: true,
        email: true,
        telephone: true,
        dateOfBirth: true,
        gender: true,
        createdAt: true,
        image: true,
      },
    });

    if (!userProfile) {
      return NextResponse.error();
    }

    return NextResponse.json(userProfile);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
