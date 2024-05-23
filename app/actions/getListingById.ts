import prisma from "@/app/libs/prismadb";

// Define the interface for the function parameters
interface IParams {
  listingId?: string;
}

// Function to get a listing by its ID
export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    // Use Prisma to find a unique listing based on the ID
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true
      }
    });

    // If no listing is found, return null
    if (!listing) {
      return null;
    }

    // Format the listing object and its nested user object
    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: listing.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    // Throw an error if any exception occurs
    throw new Error(error);
  }
}
