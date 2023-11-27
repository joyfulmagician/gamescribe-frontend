// import { Metadata } from "next";
"use client";
import { useState, useEffect, useRef } from "react";
import { MarkdownContent } from "@/components/campaign/MarkdownContent";
import { MentionBox } from "@/components/campaign/MentionBox";
import { StatBlock } from "@/components/campaign/StatBlock";
import { URLCONST } from "@/utils/url";

import axios from "axios";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResizeControl from "@/components/campaign/ResizeControl";
import Adventure from "@/components/encyclopedia/Adventure";
import CardGroup from "@/components/encyclopedia/CardGroup";

//className="grid w-full grid-cols-1 gap-[12px] lg:grid-cols-2 xl:grid-cols-2 gap-[10px] mt-[20px] px-[80px]"

const MARKDOWN_COMPNENT = "MarkdownContent";
const MENTION_COMPNENT = "MentionContent";

export default function Campaign() {


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

      {/* <section className="my-[64px] px-[80px]">
        <h1 className="text-[66px] font-bold">Encyclopedia</h1>
      </section> */}

      <section
        className="grid grid-cols-12  w-full gap-[10px] mt-[20px] px-[80px]"
        style={{
          backgroundImage: "url('/images/bg-vector.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "35px"
        }}
      >
        <CardGroup />
        <Adventure />
      </section>
    </main>
  );
}
