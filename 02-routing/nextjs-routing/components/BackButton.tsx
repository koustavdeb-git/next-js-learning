"use client";

import { useRouter, usePathname } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div>
      <button className="border-1 border-amber-50 p-2" onClick={() => router.push("/")}>Home</button>
      <button className="border-1 border-amber-50 p-2 mx-2" onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default BackButton;
