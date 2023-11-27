"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-[26px] font-semibold">
      Game<span className="text-[#7173FA]">Scribe</span>
    </Link>
  );
}
