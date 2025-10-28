"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface User {
  _id: string;
  username: string;
}

interface RootState {
  accountReducer: {
    currentUser: User | null;
  };
}

export default function AccountPage() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      router.push("/Account/Profile");
    }
  }, [currentUser, router]);

  return null;
}
