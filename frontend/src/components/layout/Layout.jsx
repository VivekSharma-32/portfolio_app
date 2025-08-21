import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <Header />
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
