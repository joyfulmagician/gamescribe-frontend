"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex h-[72px] w-full items-center justify-between px-[40px] py-[12px]">
        <Logo />

        <div className="hidden md:flex md:gap-[15px] lg:gap-[90px]">
          <Link
            href="/marketplace"
            className={clsx(
              "text-lg",
              pathname.includes("/marketplace") && "font-bold text-[#7173FA]",
            )}
          >
            Marketplace
          </Link>
          <Link
            href="/encyclopedia"
            className={clsx(
              "text-lg",
              pathname.includes("/encyclopedia") && "font-bold text-[#7173FA]",
            )}
          >
            Encyclopedia
          </Link>
          <Link
            href="/tools"
            className={clsx(
              "text-lg",
              pathname.includes("/tools") && "font-bold text-[#7173FA]",
            )}
          >
            Tools
          </Link>
          <Link
            href="/chat"
            className={clsx(
              "text-lg",
              pathname.includes("/chat") && "font-bold text-[#7173FA]",
            )}
          >
            Chat
          </Link>
        </div>

        <Link
          href="/signin"
          type="button"
          className="whitespace-nowrap rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
