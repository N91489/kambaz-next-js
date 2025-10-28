"use client";

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import store from "./store";
import { Provider } from "react-redux";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
