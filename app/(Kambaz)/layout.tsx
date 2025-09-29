"use client";

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* 1st column - Kambaz Navigation */}
      <div
        className="kambaz-nav"
        style={{
          width: "120px",
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        <KambazNavigation />
      </div>

      {/* Rest of the content (Course Nav + Main Content) */}
      <div style={{ flex: "1" }}>{children}</div>

      <style jsx>{`
        @media (max-width: 576px) {
          .kambaz-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
