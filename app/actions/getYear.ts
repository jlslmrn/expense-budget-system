import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

const getYear = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }
  try {
    const year = await prisma.year.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    if (!year) {
      return null;
    }

    return year;
  } catch (error: any) {
    return null;
  }
};

export default getYear;
