"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h3>Sign up</h3>
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
      <div style={{ marginBottom: "15px" }}>
        <input
          placeholder="verify password"
          type="password"
          className="wd-password-verify form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        onClick={handleSignup}
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
        Sign up
      </button>
      <Link
        href="/Account/Signin"
        style={{ color: "blue", textDecoration: "none" }}
      >
        Sign in
      </Link>
    </div>
  );
}
