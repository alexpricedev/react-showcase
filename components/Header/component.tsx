"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const getCls = (path: string) =>
    classNames(
      "rounded px-3 py-1 border border-transparent hover:border-white",
      {
        "bg-white text-blue-700": pathname === path,
      }
    );

  return (
    <header className="bg-blue-700 p-4 text-center text-white mb-4">
      <h1 className="font-bold text-xl">React App Router Showcase</h1>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <Link className={getCls("/")} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={getCls("/products")} href="/products">
            Products
          </Link>
        </li>
      </ul>
    </header>
  );
};
