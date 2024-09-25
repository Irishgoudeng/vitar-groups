"use client";

import React from "react";
import Button from "./components/common/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const landingRouter = () => {
    router.push("/login"); // Redirect to login page
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <Button type="button" label="To Login" onClick={landingRouter} />
    </div>
  );
};

export default Home;
