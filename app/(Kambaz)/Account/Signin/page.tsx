"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const handleSignin = () => {
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
      <div style={{ marginBottom: "15px" }}>
        <input
          placeholder="username"
          className="wd-username form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          placeholder="password"
          type="password"
          className="wd-password form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        id="wd-signin-btn"
        onClick={handleSignin}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Sign in
      </button>
      <Link
        href="/Account/Signup"
        id="wd-signup-link"
        style={{ color: "blue", textDecoration: "none" }}
      >
        Sign up
      </Link>
    </div>
  );
}
