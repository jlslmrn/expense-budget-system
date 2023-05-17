"use client";

import { signOut } from "next-auth/react";

const Home = () => {
  return (
    <>
      <div>Hello, This is Homepage!</div>
      <button onClick={() => signOut()}>Logout?</button>
    </>
  );
};

export default Home;
