import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Default() {
  return (
    <div>
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
