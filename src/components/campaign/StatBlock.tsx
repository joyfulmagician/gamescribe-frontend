import React, { RefObject } from "react";
import clsx from "clsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/ChatBox.module.css";

interface StatBlockProps { height: number; }

export const StatBlock: React.FC<StatBlockProps> = ({ height }) => {
    return (
        <div className="flex px-[16px] py-[8px] flex-col items-start gap-[16px] rounded-[14px] bg-[#18181B] overflow-y-auto" style={{ height: height }}>
            <div className="flex p-[8px] items-center gap-[8px]">
                🧟‍♂️ Stat Block
            </div>
            <div
                className={clsx(
                    styles["monster-stat-block"],
                    "scroll-div-y custom-scroll-small w-full",
                )}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Faucibus vitae aliquet nec ullamcorper sit. Volutpat est velit egestas dui id ornare arcu odio. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}