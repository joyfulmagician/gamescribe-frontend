"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col border-t border-[#FFFFFF26] px-[120px]">
      <div className="flex h-[448px] flex-row items-center justify-between py-[64px]">
        <div className="flex flex-col gap-[16px]">
          <h6 className="mb-[16px] text-[18px] font-bold">Company</h6>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h6 className="mb-[16px] text-[18px] font-bold">Help</h6>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h6 className="mb-[16px] text-[18px] font-bold">Resources</h6>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h6 className="mb-[16px] text-[18px] font-bold">Resources</h6>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
          <Link href="/">Page name</Link>
        </div>
      </div>

      <div className="flex h-[64px] flex-row items-center justify-between border-t border-[#FFFFFF26] pt-[15px]">
        <div>&copy; Copyright 2023, All Rights Reserved by Gamescribe.ai</div>
        <div className="flex flex-row gap-[10px] text-[#ffffff]">
          <a href="#">
            <i className="fa-brands fa-square-twitter"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
