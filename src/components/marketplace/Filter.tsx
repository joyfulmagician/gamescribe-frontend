"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function Filter() {
  return (
    <div className="hidden min-w-[276px] flex-col gap-[36px] sm:flex">
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] font-bold">Price, $</div>
        <div className="flex flex-row gap-[10px]">
          <div>
            <input
              className="peer h-[32px] w-[132px] rounded-[4px] border border-blue-gray-200 bg-transparent pl-[10px] text-sm font-normal text-white"
              placeholder="Min"
            />
          </div>
          <div>
            <input
              className="peer h-[32px] w-[132px] rounded-[4px] border border-blue-gray-200 bg-transparent pl-[10px] text-sm font-normal text-white"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] font-bold">Title 1</div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] font-bold">Title 2</div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Subtitle
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] font-bold">Skill Level</div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Beginner
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Intermediate
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Expert
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] font-bold">Brand</div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 1
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 2
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 3
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 4
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 5
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 6
          </label>
        </div>
        <div className="flex items-center gap-[8px]">
          <Checkbox className="h-[16px] w-[16px] border-[#334155]" />

          <label className="mt-px cursor-pointer select-none text-[18px] font-light text-white">
            Brand 7
          </label>
        </div>
      </div>
    </div>
  );
}
