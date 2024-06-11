import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

// Handler for the PUT request
export async function PUT(request: Request) {
  try {
    // Get the current user
    const currentUser = await getCurrentUser();

    // If there is no current user, return an error response
    if (!currentUser) {
      return NextResponse.error();
    }

    // Parse the request body as JSON
    const body = await request.json();

    // Destructure the image URL from the request body
    const { image } = body;

    // Update the user's profile image in the database
    const user = await prisma.user.update({
      where: { id: currentUser.id },
      data: { image },
    });

    // Return the updated user profile as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating profile image:', error);
    return NextResponse.error();
  }
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
// Handler for the DELETE request
export async function DELETE(request: Request) {
  try {
    // Get the current user
    const currentUser = await getCurrentUser();

    // If there is no current user, return an error response
    if (!currentUser) {
      return NextResponse.error();
    }

    // Update the user's profile image to null in the database
    const user = await prisma.user.update({
      where: { id: currentUser.id },
      data: { image: null },
    });

    // Return the updated user profile as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error deleting profile image:', error);
    return NextResponse.error();
  }
}