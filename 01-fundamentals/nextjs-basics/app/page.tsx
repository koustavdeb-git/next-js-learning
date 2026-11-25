import Image from "next/image";
import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div>
      <Navbar name={"Koustav"} />
      <Counter />
    </div>
  );
}
