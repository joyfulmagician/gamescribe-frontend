import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Filter from "@/components/marketplace/Filter";
import { Pagination } from "@/components/marketplace/Pagination";
import GameView from "@/components/marketplace/GameView";

export const metadata: Metadata = {
  title: "GameScribe - Marketplace",
  description: "GameScribe - Marketplace",
};

export default function Marketplace() {
  return (
    <main
      className="flex min-h-screen w-full flex-col bg-[#050618] text-white"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <section className="my-[64px] px-[80px]">
        <h1 className="text-[66px] font-bold">Marketplace</h1>
      </section>

      <section className="flex flex-row gap-[32px] px-[80px]">
        <Filter />
        <GameView />
      </section>

      <section className="mt-[80px] flex w-full flex-col px-[80px]">
        <div className="mb-[20px] border border-[#FFFFFF26]" />
        <Pagination />
      </section>

      <section className="mt-[150px] flex flex-col">
        <div className="bg-[#7173FA] text-center">
          <h4 className="text-[42px] font-bold">New Releases</h4>
        </div>

        <div className="my-[24px] mt-[80px] flex flex-row justify-between px-[40px]">
          <div className="mx-[24px] flex h-[457px] w-full flex-col gap-4">
            <img
              src="/images/new01.png"
              className="max-w-[100%] object-contain"
            />
            <div className="flex flex-col gap-[4px]">
              <h3 className="text-center text-[18px]">Game Title</h3>
              <div className="text-center text-[12x]">$599</div>
            </div>
          </div>

          <div className="mx-[24px] flex h-[457px] w-full flex-col gap-4">
            <img
              src="/images/new02.png"
              className="max-w-[100%] object-contain"
            />
            <div className="flex flex-col gap-[4px]">
              <h3 className="text-center text-[18px]">Game Title</h3>
              <div className="text-center text-[12x]">$599</div>
            </div>
          </div>

          <div className="mx-[24px] flex h-[457px] w-full flex-col gap-4">
            <img
              src="/images/new03.png"
              className="max-w-[100%] object-contain"
            />
            <div className="flex flex-col gap-[4px]">
              <h3 className="text-center text-[18px]">Game Title</h3>
              <div className="text-center text-[12x]">$599</div>
            </div>
          </div>

          <div className="mx-[24px] flex h-[457px] w-full flex-col gap-4">
            <img
              src="/images/new04.png"
              className="max-w-[100%] object-contain"
            />
            <div className="flex flex-col gap-[4px]">
              <h3 className="text-center text-[18px]">Game Title</h3>
              <div className="text-center text-[12x]">$599</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[150px] flex flex-col">
        <div>
          <h4 className="mx-[50px] text-[29px] font-bold">Testimonials</h4>
        </div>
        <div className="my-[24px] mt-[40px] flex flex-col justify-between px-[40px] md:flex-row">
          <div className="m-4 h-[474px] w-[648px] rounded-xl border border-[#FFFFFF26] lg:w-auto">
            <div className="m-14 flex h-[334px] flex-col items-center gap-[30px]">
              <img src="/images/Avatar1.png" className="h-[120px] w-[120px]" />
              <p className="text-center text-[24px] font-bold">
                Game Scribe took our campaign from zero to hero. The AI's
                vibrant storytelling is unmatched, boosting our gaming sessions!
              </p>
              <p className="text-[20px] font-normal text-[#FFFFFFCC]">
                TABLETOPGUILD
              </p>
            </div>
          </div>
          <div className="m-4 h-[474px] w-[648px] rounded-xl border border-[#FFFFFF26] lg:w-auto">
            <div className="m-14 flex h-[334px] flex-col items-center gap-[30px]">
              <img src="/images/Avatar2.png" className="h-[120px] w-[120px]" />
              <p className="text-center text-[24px] font-bold">
                I can't imageine going back to the old days. GameScribe.ai keeps
                players engaged and the story flowing seamlessly.
              </p>
              <p className="text-[20px] font-normal text-[#FFFFFFCC]">
                ROLLINGREALMS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-[50px] px-[80px] py-[50px]"
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
