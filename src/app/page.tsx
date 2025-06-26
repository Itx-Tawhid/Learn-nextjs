"use client";
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";

export default function Home() {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`/${page}`);
  };
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <button onClick={() => navigate("user")}>User</button>
      </div>
    </>
  );
}
