import { Metadata } from "next";

import Header from "@/components/layout/Header";
import ChatDescription from "@/components/chat/ChatDescription";
import ChatBox from "@/components/chat/ChatBox";

export const metadata: Metadata = {
  title: "GameScribe - Encyclopedia",
  description: "GameScribe - Encyclopedia",
};

export default function Chat() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#050618] text-white"
      style={{
        backgroundColor: "#050618",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <section className="mt-[40px] px-[40px]">
        <p className="text-[14px] text-[#A5AAB1]">
          This is the beginning of your direct message history with{" "}
          <span className="font-bold">us.</span>
        </p>
      </section>

      <section className="mt-[40px] flex flex-row gap-[80px] px-[40px]">
        <ChatBox />
      </section>
    </main>
  );
}
