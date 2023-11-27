import React, { RefObject } from "react";
import Link from 'next/link'
import clsx from "clsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/ChatBox.module.css";
import style_e from "@/styles/Encyclopedia.module.css";

interface MentionBoxProps { height: number; content: string }

export const MentionBox: React.FC<MentionBoxProps> = ({ height, content }) => {
    return (
        <div className="flex px-[16px] py-[8px] flex-col items-start gap-[10px] rounded-[14px] bg-[#18181B] overflow-y-auto" style={{ height: height + "px" }}>
            <div className="flex p-[0px] items-center gap-[8px]">
                <Link href="#" className={clsx(style_e['encyclopedia-btn'])}>
                    Monster
                    <img src="../icons/add-circle.svg" />
                </Link>
                <Link href="#" className={clsx(style_e['encyclopedia-btn'])}>
                    Tag
                    <img src="../icons/add-circle.svg" />
                </Link>
                <Link href="#" className={clsx(style_e['encyclopedia-btn'])}>
                    Tag
                    <img src="../icons/add-circle.svg" />
                </Link>
                <Link href="#" className={clsx(style_e['encyclopedia-btn'])}>
                    Add Tag
                    <img src="../icons/close-circle.svg" />
                </Link>
            </div>
            <div className="flex p-[8px] items-center gap-[8px]">
                🧟‍♂️ Mentions
            </div>
            <div
                className={clsx(
                    styles["monster-stat-block"],
                    "scroll-div-y custom-scroll-small w-full gap-[8px]",
                )}
                style={{ height: "calc(100% -40px)" }}
            >
                <div className="flex gap-[8px] items-start">
                    <img src="../icons/profile.svg" className="pt-[3px]"></img>
                    <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="flex gap-[8px] items-start">
                    <img src="../icons/profile.svg" className="pt-[3px]"></img>
                    <p>
                        Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Faucibus vitae aliquet nec ullamcorper sit. Volutpat est velit egestas dui id ornare arcu odio. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
                    </p>
                </div>
                <div className="flex gap-[8px] items-start">
                    <img src="../icons/profile.svg" className="pt-[3px]"></img>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                {/* <Markdown remarkPlugins={[remarkGfm]}>
                    {content} 
                </Markdown> */}

            </div>
            <div className="h-[40px] w-full flex items-center gap-[8px] pt-[8px]" style={{
                borderTop: "#999999 solid 1px"
            }}>
                <img src="../icons/setting-2.svg" />
                <a href="#" className="text-[14px]">Add Block</a>
            </div>
        </div>
    )
}