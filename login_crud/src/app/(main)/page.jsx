"use client";
import { useGlobalContext } from "@/contexts/store";

export default function page() {
  const { setTitle } = useGlobalContext();
  setTitle("Home");
  return (
    <div className="text-center text-3xl font-bold text-gray-500">
      Welcome back! We're happy to see you again.
    </div>
  );
}
