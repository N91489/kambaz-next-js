"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
}

interface RootState {
  accountReducer: {
    currentUser: User | null;
  };
}

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  if (!profile) {
    return null;
  }

  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px" }}>
      <h3>Profile</h3>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Username
        </label>
        <input
          value={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
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
        <label style={{ display: "block", marginBottom: "5px" }}>
          Password
        </label>
        <input
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
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
        <label style={{ display: "block", marginBottom: "5px" }}>
          First Name
        </label>
        <input
          value={profile.firstName}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
          placeholder="First Name"
          id="wd-firstname"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Last Name
        </label>
        <input
          value={profile.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          placeholder="Last Name"
          id="wd-lastname"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Date of Birth
        </label>
        <input
          value={profile.dob}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          type="date"
          id="wd-dob"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
        <input
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          type="email"
          id="wd-email"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Role</label>
        <select
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          id="wd-role"
          className="form-select"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <button
        onClick={signout}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          textDecoration: "none",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Sign out
      </button>
    </div>
  );
}
