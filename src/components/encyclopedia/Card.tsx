import React from "react";
import Link from 'next/link'
import clsx from "clsx";
import styles from "@/styles/Monster.module.css";
interface propsValue {
    id: string;
    image: string;
    title: string;
    theme: string;
    created_at: string;
    content: string;
    rule: string;
}
export default function Card({ data }: { data: propsValue }) {
    return (
        <div className="flex flex-col w-full h-auto p-[12px] gap-[12px] rounded-[7px] bg-[#181821]">
            <img src={data.image} className="h-auto rounded=[3.5px]" />
            <div className="flex flex-col gap-[4.5px]" style={{ position: "relative" }}>
                <h3 className={clsx(
                    styles["monster-card-title"],
                )}>
                    {data.title}
                </h3>
                <div className={clsx(
                    styles["monster-card-theme"],
                )}>
                    {data.theme} | {data.created_at}
                </div>
                <div className={clsx(
                    styles["monster-card-content"],
                )}>
                    {data.content}
                </div>
                <div className={clsx(
                    styles["monster-card-rule"],
                )}>
                    {data.rule}
                </div>
                <Link href="/encyclopedia/campaign" className={clsx(
                    styles["monster-card-btn"],
                )}>
                    View
                </Link>
            </div>
        </div>
    )
}