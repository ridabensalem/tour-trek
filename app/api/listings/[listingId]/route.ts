import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

/**
 * Handler for DELETE request to delete a listing.
 * @param request The request object.
 * @param params The request parameters.
 * @returns The response object.
 */
export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  // Get the current user
  const currentUser = await getCurrentUser();

  // If no user is logged in, return an error response
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  // Validate the listing ID
  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  // Delete the listing
  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id
    }
  });

  // Return the deleted listing as a JSON response
  return NextResponse.json(listing);
}
