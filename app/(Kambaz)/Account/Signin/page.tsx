"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { users } from "../../Database";

interface Credentials {
  username: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleSignin = () => {
    console.log("Attempting signin with:", credentials);
    console.log("Available users:", users);

    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    console.log("Found user:", user);

    if (!user) {
      alert("Invalid credentials. Try: iron_man / stark123");
      return;
    }
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Try: iron_man / stark123 (Student) or hulk / banner123 (Faculty)
      </p>
      <div style={{ marginBottom: "15px" }}>
        <input
          placeholder="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
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
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
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
