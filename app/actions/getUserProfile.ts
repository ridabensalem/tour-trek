import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserProfile() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const userProfile = await prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
    select: {
        username: true,
        createdAt: true,
        image: true
    },
  });

  return userProfile;
}
