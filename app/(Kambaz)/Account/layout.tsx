"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();

  const links = [
    { href: "/Account/Signin", label: "Signin" },
    { href: "/Account/Signup", label: "Signup" },
    { href: "/Account/Profile", label: "Profile" },
  ];

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* Account Sidebar */}
      <div
        style={{
          width: "200px",
          backgroundColor: "white",
          borderRight: "1px solid #ddd",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <h4>Account</h4>
        <div style={{ marginTop: "20px" }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} style={{ marginBottom: "10px" }}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive ? "black" : "red",
                    borderLeft: isActive ? "4px solid black" : "none",
                    paddingLeft: isActive ? "10px" : "14px",
                    display: "block",
                    textDecoration: "none",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: "1", padding: "40px" }}>{children}</div>
    </div>
  );
}
