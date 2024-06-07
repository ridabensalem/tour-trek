import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

// Handler for GET request to retrieve preferences
export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Retrieve user preferences from the database
  const user = await prisma.user.findUnique({
    where: { id: currentUser.id },
    select: {
      currency: true,
      language: true,
    },
  });

  return NextResponse.json(user);
}

// Handler for POST request to save preferences
export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { currency, language } = body;

  // Save preferences to the database
  await prisma.user.update({
    where: { id: currentUser.id },
    data: { currency, language },
  });

  return NextResponse.json({ message: 'preferences saved successfully' });
}