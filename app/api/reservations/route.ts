import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    listingId,
    startDate,
    endDate,
    totalPrice
   } = body;

   if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }
// Check if listingid the same
const listing = await prisma.listing.findUnique({
  where: { id: listingId }
});
if (!listing) {
  return NextResponse.error();
}
if (listing.userId === currentUser.id) {
  return NextResponse.json({ error: 'You cannot reserve your own home' }, { status: 400 });
}
  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        }
      }
    }
  });

  return NextResponse.json(listingAndReservation);
}
