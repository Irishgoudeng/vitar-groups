"use client";

import React from "react";
import Button from "./components/common/Button";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const landingRouter = () => {
    router.push("/login");
  };
  return (
    <div>
      <h1>Landing Page</h1>
      <Button label="To Login" onClick={landingRouter} />
    </div>
  );
};

export default Home;
