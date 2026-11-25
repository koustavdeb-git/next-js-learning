import Link from "next/link";

type NavProps = {
  name: string;
};

const Navbar = ({ name }: NavProps) => {

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <h1>Welcome {name}</h1>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
