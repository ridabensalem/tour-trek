import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

// Import the 'prisma' instance from the 'prismadb' module

// Import the 'getCurrentUser' function from the './getCurrentUser' module

// Function to get favorite listings
export default async function getFavoriteListings() {
  try {
    // Get the current user
    const currentUser = await getCurrentUser();

    // If there is no current user, return an empty array
    if (!currentUser) {
      return [];
    }

    // Find the favorite listings based on the current user's favoriteIds
    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])]
        }
      }
    });

    // Convert the 'createdAt' property of each favorite listing to a string
    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    // Return the safe favorites
    return safeFavorites;
  } catch (error: any) {
    // Throw an error if any exception occurs
    throw new Error(error);
  }
}
