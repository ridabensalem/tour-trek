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
    // Get the current user
    const currentUser = await getCurrentUser();

    // If there is no current user, return an error response
    if (!currentUser) {
      return NextResponse.error();
    }

    // Return the user data as a JSON response
    return NextResponse.json(currentUser);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}