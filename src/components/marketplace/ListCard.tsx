"use client";

import { IconButton, Rating } from "@material-tailwind/react";

interface Props {
  image: string;
  title: string;
  price: number;
  rating: number;
  vote: number;
}

export default function ListCard({ image, title, price, rating, vote }: Props) {
  return (
    <div className="flex h-[94px] w-full flex-row border border-[#FFFFFF26]">
      <img className="h-full w-[100px] object-cover" src={image} />

      <div className="flex flex-1 flex-row items-center justify-between px-[24px] py-[12px]">
        <div className="flex flex-col">
          <div className="text-[14px] font-normal">{title}</div>
          <div className="text-[18px] font-semibold">${price ?? 0}</div>
          <div className="flex flex-row items-center">
            <span>
              <Rating value={parseInt(rating.toString())} />
            </span>
            <span className="ml-2 text-[12px] font-normal text-[#5B6871]">
              {vote}
            </span>
          </div>
        </div>
        <div className="mt-[20px] px-[24px]">
          <IconButton
            variant="text"
            size="lg"
            className="rounded-full text-white"
          >
            <i className="fas fa-heart" />
          </IconButton>

          <button className="h-[48px] rounded-[30px] border border-[#585979] px-[24px] text-[18px] font-bold leading-[48px] text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
