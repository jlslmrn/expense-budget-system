import axios from "axios";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import GetYear from "./components/GetYear";
import getYear from "../actions/getYear";
import { useEffect, useState } from "react";
import { Year } from "@prisma/client";

const Home = async () => {
  const yearData = await getYear();

  console.log(yearData, "-----> @this is YEAR");
  // const { data: session, status } = useSession();

  // const createYear = async (user: any) => {
  //   await axios
  //     .post("/api/year", user)
  //     .then((response) => console.log(response, "this returns createYear"))
  //     .catch(() => toast.error("Year exists!"));
  // };

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   return (
  //     <div className="flex flex-col justify-center items-center h-screen">
  //       <h1>Welcome, {session.user?.name}!</h1>
  //       <h3>Email: {session!.user!.email}</h3>
  //       <Image
  //         src={session?.user?.image || "/images/logo-pika.png"}
  //         alt="user image"
  //         width={96}
  //         height={96}
  //       />
  //       <div className="mt-6 flex gap-8">
  //         <button onClick={() => createYear(session?.user)}>CreateYear</button>
  //         {/* <GetYear user={session?.user} /> */}
  //         <button onClick={() => signOut()}>Logout?</button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <div>Hello!</div>
      {/* <button onClick={() => signOut()}>Logout?</button> */}
      //@ts-expect-error Server components
      <GetYear year={yearData} />
    </>
  );
};

export default Home;
