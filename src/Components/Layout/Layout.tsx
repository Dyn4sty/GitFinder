import React from "react";
import { useRouter } from "next/router";
import Transition from "../Transition";
import "./Layout.module.scss";
const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div
      className="layout mt-5 mx-5"
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: " 1.5rem",
        minHeight: "100vh",
      }}
    >
      {/* Header component that doesn't animate */}
      <Transition location={router.pathname}>
        <main className="main">{children}</main>
      </Transition>
    </div>
  );
};
export default Layout;
