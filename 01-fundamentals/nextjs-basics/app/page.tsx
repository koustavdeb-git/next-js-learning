
import Counter from "@/components/Counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Fundamentals",
  description: "Learn the basics of Next JS"
}

export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
}
