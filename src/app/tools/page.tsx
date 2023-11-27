import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GameScribe - Tools",
  description: "GameScribe - Tools",
};

export default function Tools() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#050618] text-white"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <section className="my-[64px] px-[80px]">
        <h1 className="text-[66px] font-bold">Tools</h1>
      </section>

      <section
        className="mt-[150px] px-[80px] py-[150px]"
        style={{
          backgroundImage: "url('/images/bg-vector.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center gap-[50px] rounded-xl border border-[#FFFFFF26] bg-[#050618] py-[50px]">
          <h4 className="text-[42px] font-bold">Subscribe to our newsletter</h4>
          <div className="flex flex-row gap-[20px]">
            <input
              placeholder="First name"
              className="rounded-3xl border border-white bg-transparent px-5"
            />
            <input
              placeholder="Email address"
              className="rounded-3xl border border-white bg-transparent px-5"
            />
            <button className="rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
