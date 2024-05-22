import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

// Handler for POST requests
export async function POST(
  request: Request, 
  { params }: { params: IParams }
) {
  // Get the current user
  const currentUser = await getCurrentUser();

  // If no user is found, return an error response
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  // Validate the listing ID
  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  // Clone the favoriteIds array and add the new listingId
  const favoriteIds = [...(currentUser.favoriteIds || []), listingId];

  // Update the user's favoriteIds in the database
  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds
    }
  });

  // Return the updated user as a JSON response
  return NextResponse.json(user);
}

// Handler for DELETE requests
export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  // Get the current user
  const currentUser = await getCurrentUser();

  // If no user is found, return an error response
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  // Validate the listing ID
  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  // Filter out the listingId from the favoriteIds array
  const favoriteIds = (currentUser.favoriteIds || []).filter((id) => id !== listingId);

  // Update the user's favoriteIds in the database
  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds
    }
  });

  // Return the updated user as a JSON response
  return NextResponse.json(user);
}
