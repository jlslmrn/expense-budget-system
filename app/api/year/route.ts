import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User not found!");
    }

    const year = await prisma.year.create({
      data: {
        year: new Date().getFullYear().toString(),
        currentYear: true,
        user: {
          connect: { id: user.id },
        },
      },
    });

    return NextResponse.json(body);
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");

    return new NextResponse("Internal Error", { status: 500 });
  }
}
