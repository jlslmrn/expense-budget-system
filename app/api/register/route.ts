import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse(
        "Missing information, please fill out correctly",
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    if (user) {
      await prisma.year.create({
        data: {
          year: new Date().getFullYear().toString(),
          currentYear: true,
          user: {
            connect: { id: user.id },
          },
        },
      });
      return NextResponse.json(user);
    }
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");

    return new NextResponse("Internal Error", { status: 500 });
  }
}
