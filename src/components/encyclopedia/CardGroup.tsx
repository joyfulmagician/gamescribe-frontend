import React from "react";
import Card from "@/components/encyclopedia/Card";

import { getCampaign } from "@/redux/campaignSlice";
import { useAppSelector } from '../../redux/hook';
export default function CardGroup() {
    const card_data = useAppSelector(getCampaign);
    return (
        <div className="col-span-12  md:col-span-12 lg:col-span-7 flex p-[24px] flex-col gap-[24px] rounded-[14px] bg-[#18181B80]" >

            <section className="flex items-center gap-[8px] p-[8px]">
                <img className="h-[24px] w-[24px] object-cover" src="icons/global.svg" />
                <h2 className="text-[24px] font-bold">Explore Existing Campaigns</h2>
            </section>
            <div className="grid w-full grid-cols-1 gap-[12px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {
                    card_data.map((value, index) => {
                        return <Card key={index} data={value} />
                    })
                }
            </div>
        </div>
    )
}