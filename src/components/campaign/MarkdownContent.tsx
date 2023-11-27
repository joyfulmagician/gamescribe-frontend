import React, { RefObject, useEffect } from "react";
import clsx from "clsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MonsterEditor from "@/components/chat/MonsterEditor";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setActionState, getContent } from "@/redux/chatSlice";


import styles from "@/styles/ChatBox.module.css";

interface MarkdownContentProps { height: number; content: string }

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ height, content }) => {
    const dispatch = useAppDispatch();
    const actionState = useAppSelector(getContent).actionState;
    useEffect(() => {
        dispatch(setActionState("Cancel"));
    }, []);
    return (
        <>
            {actionState == "Edit" && (
                <div className="flex px-[16px] py-[8px] flex-col items-start gap-[16px] rounded-[14px] bg-[#18181B] overflow-y-auto" style={{ height: height + "px" }}>
                    <div className="flex p-[8px] items-center justify-between w-full">
                        <div>🧟‍♂️ Edit Monster</div>
                        <div className="flex items-center gap-[8px]">
                            <div className="float-right mt-[3px] flex items-center">
                                <span
                                    className="border-white-500 mr-[5px] flex cursor-pointer 
                    items-center gap-1 rounded-xl border-[0.5px] px-[6px] py-[3px] text-[10px]"
                                    onClick={() => dispatch(setActionState("Save"))}
                                >
                                    <img src="/images/save.svg" alt="edit" className="ico-16" />
                                    <span className="font-bold">Save</span>
                                </span>
                                <span
                                    className="border-white-500 mr-[5px] flex cursor-pointer 
                    items-center gap-1 rounded-xl border-[0.5px] px-[6px] py-[3px] text-[10px]"
                                    onClick={() => dispatch(setActionState("Cancel"))}
                                >
                                    <img
                                        src="/images/cancel.svg"
                                        alt="cancel"
                                        className="ico-16"
                                    />
                                    <span className="font-bold">Cancel</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(
                        styles["monster-stat-block"],
                        "scroll-div-y custom-scroll-small w-full",
                    )}
                    >
                        <MonsterEditor height={height} />
                    </div>
                </div>
            )}
            {actionState != "Edit" && (
                <div className="flex px-[16px] py-[8px] flex-col items-start gap-[16px] rounded-[14px] bg-[#18181B] overflow-y-auto" style={{ height: height + "px" }}>
                    <div className="flex p-[8px] items-center justify-between w-full">
                        <div>🧟‍♂️ Monster</div>
                        <div className="flex items-center gap-[8px]">
                            <a href="#" onClick={() => {
                                dispatch(setActionState("Edit"));
                            }}>
                                <img src='../icons/edit.svg' alt="Edit" />
                            </a>
                            <a href="#">
                                <img src='../icons/gallery.svg' />
                            </a>
                            <a href="#">
                                <img src='../icons/message-text.svg' alt="Save" />
                            </a>
                            <a href="#">
                                <img src='../icons/message-text1.svg' />
                            </a>
                            <a href="#">
                                <img src='../icons/filter.svg' />
                            </a>
                            <a href="#">
                                <img src='../icons/more.svg' />
                            </a>
                        </div>
                    </div>
                    <div className={clsx(
                        styles["monster-stat-block"],
                        "scroll-div-y custom-scroll-small w-full",
                    )}
                    >
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </Markdown>
                    </div>
                </div>
            )}
        </>
    )
}