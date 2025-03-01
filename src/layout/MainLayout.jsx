import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto min-h-screen flex flex-col justify-between px-4">
        <div className="css-blurry"></div>
        <Navbar />
        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
