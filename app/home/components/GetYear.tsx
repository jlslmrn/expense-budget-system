"use client";

import { Year } from "@prisma/client";
import { signOut } from "next-auth/react";

interface GetYearProps {
  year: Year[] | null;
}

const GetYear: React.FC<GetYearProps> = ({ year }) => {
  console.log(year, "--------> @THIS IS YEARVALUES!");
  return (
    <div>
      {year?.length !== 0
        ? year?.map((y) => <h1 key={y.id}>This is the year: {y.year}</h1>)
        : "No existing year for this user!"}
      <div>
        <button onClick={() => signOut()}>Logout?</button>
      </div>
    </div>
  );
};

export default GetYear;
