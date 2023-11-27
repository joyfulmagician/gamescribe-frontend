import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import FeatureCard from "@/components/home/FeatureCard";
import EventLargeCard from "@/components/home/EventLargeCard";
import EventSmallCard from "@/components/home/EventSmallCard";
import Footer from "@/components/layout/Footer";
import CampaignLetterCard from "@/components/home/CampaignLetterCard";
import CampaignImageCard from "@/components/home/CampaignImageCard";


import { Provider } from 'react-redux';
import { store } from '../redux/store';


// export const metadata: Metadata = {
//   title: "GameScribe - Landing",
//   description: "GameScribe - Landing",
// };

function Home() {
  const featureCards = [
    {
      icon: "/icons/copy.svg",
      title: "The ultimate ally for storytellers",
      content:
        "Unleash your storytelling prowess and embark on unforgettable journeys with our platform. We empower storytellers like you to craft intricate plots, vibrant characters, and immersive lore that captivates players from all walks of life.",
    },
    {
      icon: "/icons/cube.svg",
      title: "All-inclusive tabletop RPG companion",
      content:
        "We empower game masters and players alike to create captivating character descriptions, vivid box text and custom stat blocks. You can enrich your gameplay experience, allowing you to focus on the heart of tabletop gaming - storytelling.",
    },
    {
      icon: "/icons/sparkles.svg",
      title: "AI companion for your tabletop RPGs!",
      content:
        "Focus on crafting compelling narratives that will leave players enchanted and enthralled. Embrace the future of tabletop gaming with GameScribe by your side, your perfect AI partner for unforgettable adventure.",
    },
  ];

  const eventLarge = {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla. Et egestas quis ipsum suspendisse ultrices.",
    image: "/images/event-large.png",
  };

  const eventSmall = {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla. Et egestas quis ipsum suspendisse ultrices.",
    image: "/images/event-small.png",
  };

  return (
    <main
      className="flex min-h-screen flex-col bg-[#050618] text-white"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <section className="mt-[200px]">
        <div className="mx-auto flex w-[800px] flex-col items-center gap-[32px]">
          <h6 className="text-base font-normal tracking-widest">
            LATEST RELEASE
          </h6>

          <h4 className="text-[100px] font-semibold">
            Game<span className="text-[#7173FA]">Scribe</span>
          </h4>

          <h5 className="text-[32px] font-bold">
            Unleash Your Story With Generative AI
          </h5>

          <button className="rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base">
            Try Now
          </button>
        </div>
      </section>

      <section className="mt-[200px] px-[80px]">
        <div className="h-[800px] rounded-[9px] bg-[#191C1F] p-[16px]">
          <div className="h-full w-full bg-[#151515]"></div>
        </div>
      </section>

      <section className="mt-[150px] px-[80px]">
        <div className="flex flex-row flex-wrap justify-between gap-[80px]">
          {featureCards.map((fc) => (
            <FeatureCard
              key={fc.title}
              icon={fc.icon}
              title={fc.title}
              content={fc.content}
            />
          ))}
        </div>
      </section>

      <section className="mt-[150px] flex flex-col gap-[8px] px-[80px]">
        <h1 className="text-[64px] font-bold">Unleash Your Creativity</h1>
        <h6 className="text-[24px] font-semibold tracking-[5px]">
          You write, we generate the amazing stories - so Imagination Meets
          Seamless Code Generation.
        </h6>
        <div className="mt-[50px]">
          <button className="rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base">
            Try Now
          </button>
        </div>
      </section>

      <section className="mt-[150px] px-[80px]">
        <div className="flex flex-col flex-wrap justify-between gap-[80px] lg:flex-row">
          <EventLargeCard
            title={eventLarge.title}
            content={eventLarge.content}
            image={eventLarge.image}
          />

          <EventSmallCard
            title={eventSmall.title}
            content={eventSmall.content}
            image={eventSmall.image}
          />
        </div>
      </section>

      <section className="mt-[150px] px-[80px]">
        <div className="flex flex-row flex-wrap items-center justify-between gap-[80px]">
          <CampaignLetterCard />

          <CampaignImageCard />
        </div>
      </section>

      <section className="mt-[150px] flex flex-col px-[80px] ">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-3xl font-bold">Marketplace Review</h4>

          <div className="flex flex-row gap-[20px]">
            <a href="#" className="text-3xl">
              <i className="fa-solid fa-angle-left"></i>
            </a>
            <a href="#" className="text-3xl">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>

        <div className="mt-[50px] flex w-full flex-row justify-between gap-[2%]">
          <img src="/images/hero01.png" className="w-[23.5%] object-contain" />

          <img src="/images/hero02.png" className="w-[23.5%] object-contain" />

          <img src="/images/hero03.png" className="w-[23.5%] object-contain" />

          <img src="/images/hero04.png" className="w-[23.5%] object-contain" />
        </div>
      </section>

      <section
        className="mt-[150px] px-[80px] py-[100px]"
        style={{
          backgroundImage: "url('/images/bg-vector.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center gap-[50px] rounded-xl border border-[#FFFFFF26] bg-[#050618] py-[80px]">
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

      <section className="px-[80px] py-[30px]">
        <div className="flex flex-col gap-[80px]">
          <h4 className="text-center text-[42px] font-bold">
            Frequently Asked Questions
          </h4>

          <div className="mb-[100px] flex flex-row gap-[80px]">
            <div className="flex flex-col gap-[20px]">
              <h5 className="text-[29px] font-bold">
                What kind of games does GameScribe support?
              </h5>
              <div className="text-2xl font-normal">
                GameScribe supports a wide variety of gaming genres, including
                RPG, strategy, adventure, and more.
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h5 className="text-[29px] font-bold">
                How do I start using GameScribe?
              </h5>
              <div className="text-2xl font-normal">
                Sign up for an account, choose your game, and let GameScribe
                enhance your gaming experience with its AI expertise.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home
