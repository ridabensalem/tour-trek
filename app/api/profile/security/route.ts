import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const { password , recoveryEmail } = body;

    // Get the current user
  const currentUser = await getCurrentUser();

  // If no user is found, return an error response
  if (!currentUser) {
    return NextResponse.error();
  }
  // Prepare the update data object
  const updateData: any = {};

    // If password is provided, hash it and add to update data
    if (password) {
      updateData.hashedPassword = await bcrypt.hash(password, 12);
    }
    // If recoveryEmail is provided, add to update data
    if (recoveryEmail) {
      updateData.recoveryEmail = recoveryEmail;
    }

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
          },
      data:  updateData,  
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "internal Server Error" }, { status: 500 });
  }
}
    //Delete user account endpoint
export async function DELETE(request: Request) {
    try {
      // Get the current user
      const currentUser = await getCurrentUser();
  
      // If no user is found, return an error response
      if (!currentUser) {
        return NextResponse.error();
      }
  
      // Delete the user from the database
      await prisma.user.delete({
        where: {
          id: currentUser.id
        }
      });
  
      // Return a success response
      return NextResponse.json({ message: "user account deleted successfully" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }