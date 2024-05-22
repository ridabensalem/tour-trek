import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

/**
 * Handles the POST request for user registration.
 * @param request The incoming request object.
 * @returns The response object containing the created user.
 */
export async function POST(request: Request) {
  // Parse the request body as JSON
  const body = await request.json();

  // Extract the required fields from the body
  const { email, name, password } = body;

  // Hash the password using bcrypt with a cost factor of 12
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create a new user in the database using Prisma
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  // Return the created user as a JSON response
  return NextResponse.json(user);
}
