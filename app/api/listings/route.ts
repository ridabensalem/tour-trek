import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

// Handler for the POST request
export async function POST(request: Request) {
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
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  // Check if any of the required properties are missing
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  // Create a new listing in the database using Prisma
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  // Return the created listing as a JSON response
  return NextResponse.json(listing);
}
