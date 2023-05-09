import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <h1 className="text-blue-800 text-3xl">Todo Application Using Next.JS</h1>
      {children}
    </>
  );
}
