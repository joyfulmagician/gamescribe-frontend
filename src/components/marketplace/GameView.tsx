"use client";

import { useState } from "react";

import ImageCard from "./ImageCard";
import ListCard from "./ListCard";
import clsx from "clsx";

export default function GameView() {
  const [viewBy, setViewBy] = useState("thumbnail");

  const cards = [
    {
      image: "/images/card01.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card02.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card03.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card04.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card05.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card06.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card07.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card08.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card09.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card10.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card11.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card12.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card13.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card14.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
    {
      image: "/images/card15.png",
      title: "Title",
      price: 599,
      rating: 4.5,
      vote: 243,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="mb-[20px] flex items-center justify-end gap-[15px]">
        <div className="rounded-[4px] border border-[#FFFFFF26] p-[5px] text-[14px] font-normal text-[#9AA6AC]">
          <span className="px-[4px]">Sort by</span>
          <i className="fa-solid fa-angle-down px-[5px]"></i>
        </div>
        <div className="">
          <button
            onClick={() => setViewBy("thumbnail")}
            className={clsx(
              "rounded-s-sm border border-white px-[8px] py-[5px] text-sm",
              viewBy === "thumbnail" && "bg-white text-black",
            )}
          >
            <i className="fa-solid fa-grip" />
          </button>

          <button
            onClick={() => setViewBy("list")}
            dir="rtl"
            className={clsx(
              "rounded-s-sm border border-white px-[8px] py-[5px] text-sm",
              viewBy === "list" && "bg-white text-black",
            )}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>

      {viewBy === "thumbnail" && (
        <div className="grid w-full grid-cols-1 gap-[1px] lg:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ image, title, price, rating, vote }, index) => (
            <ImageCard
              key={index}
              image={image}
              title={title}
              price={price}
              rating={rating}
              vote={vote}
            />
          ))}
        </div>
      )}

      {viewBy === "list" && (
        <div className="flex w-full flex-col gap-[5px]">
          {cards.map(({ image, title, price, rating, vote }, index) => (
            <ListCard
              key={index}
              image={image}
              title={title}
              price={price}
              rating={rating}
              vote={vote}
            />
          ))}
        </div>
      )}
    </div>
  );
}
