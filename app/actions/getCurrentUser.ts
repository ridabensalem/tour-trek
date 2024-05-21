import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

// Function to get the session using next-auth
export async function getSession() {
  return await getServerSession(authOptions);
}

// Function to get the current user
export default async function getCurrentUser() {
  try {
    // Get the session
    const session = await getSession();

    // If session or user email is not available, return null
    if (!session?.user?.email) {
      return null;
    }

    // Find the current user in the database using the email
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    // If current user is not found, return null
    if (!currentUser) {
      return null;
    }

    // Return the current user with additional properties
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    // If any error occurs, return null
    return null;
  }
}
