"use client";

import { Rating } from "@material-tailwind/react";

interface Props {
  image: string;
  title: string;
  price: number;
  rating: number;
  vote: number;
}

export default function ImageCard({
  image,
  title,
  price,
  rating,
  vote,
}: Props) {
  return (
    <div className="flex w-full flex-col border border-[#FFFFFF26]">
      <img className="aspect-28/31 h-auto" src={image} />

      <div className="flex flex-row items-center justify-between px-[24px] py-[20px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-[14px] font-normal">{title}</div>
          <div className="text-[18px] font-semibold">${price ?? 0}</div>
          <div className="flex flex-row items-center">
            <div>
              <Rating value={parseInt(rating.toString())} />
            </div>
            <span className="ml-2 text-[12px] font-normal text-[#5B6871]">
              {vote}
            </span>
          </div>
        </div>

        <button className="h-[48px] rounded-[30px] border border-[#585979] px-[24px] text-[18px] font-bold leading-[48px] text-white">
          Buy
        </button>
      </div>
    </div>
  );
}
