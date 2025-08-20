import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      <Header />
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
