import prisma from "@/app/libs/prismadb";

// Define the interface for the parameters used in the getListings function
export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

// Function to retrieve listings based on the provided parameters
export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    // Add userId to the query if provided
    if (userId) {
      query.userId = userId;
    }

    // Add category to the query if provided
    if (category) {
      query.category = category;
    }

    // Add roomCount to the query if provided
    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      };
    }

    // Add guestCount to the query if provided
    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      };
    }

    // Add bathroomCount to the query if provided
    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      };
    }

    // Add locationValue to the query if provided
    if (locationValue) {
      query.locationValue = locationValue;
    }

    // Add NOT condition to exclude listings with overlapping reservations
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    // Retrieve listings from the database based on the query
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Convert createdAt property of each listing to ISO string format
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
