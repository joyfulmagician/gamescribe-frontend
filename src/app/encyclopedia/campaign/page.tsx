// import { Metadata } from "next";
"use client";
import { useState, useEffect, useRef } from "react";
import { MarkdownContent } from "@/components/campaign/MarkdownContent";
import { MentionBox } from "@/components/campaign/MentionBox";
import { StatBlock } from "@/components/campaign/StatBlock";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { URLCONST } from "@/utils/url";

import axios from "axios";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tree from "@/components/campaign/Tree";
import ResizeControl from "@/components/campaign/ResizeControl";

import { useAppSelector } from "@/redux/hook";
import { getContent } from "@/redux/chatSlice";

const MARKDOWN_COMPNENT = "MarkdownContent";
const MENTION_COMPNENT = "MentionContent";

// export const metadata: Metadata = {
//   title: "GameScribe - Encyclopedia",
//   description: "GameScribe - Encyclopedia",
// };

var treeData = [
    {
        id: 1,
        label: 'Campaign',
        children: [
            {
                id: 2,
                label: 'Monster',
                children: [
                    { id: 3, label: '', content: '' },
                ],
            },
            { id: 5, label: 'Character' },
            { id: 6, label: 'Spell' },
            { id: 7, label: 'Background' },
        ],
    }
]

var clickedComponent = ""

interface TreeNode {
    id: number;
    label: string;
    content?: string;
    children?: TreeNode[];
}

export default function Encyclopedia() {
    const content = useAppSelector(getContent);
    const [markdownContentHeight, setMarkdownContentHeight] = useState<number>(600);
    const [mentionContentHeight, setMentionContentHeight] = useState<number>(300);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [monsters, setMonsters] = useState<Array<{ _id: string; content: string }>>([]);
    const [markdownOffsetX, setMarkdownOffsetX] = useState(0);
    const [mentionOffsetX, setMentionOffsetX] = useState(0);
    const [treeData, setTreeData] = useState<Array<{ id: number; label: string, children?: TreeNode[] }>>([
        {
            id: 1,
            label: 'Campaign',
            children: [
                {
                    id: 2,
                    label: 'Monster',
                    children: [
                        { id: 3, label: '', content: '' },
                    ],
                },
                { id: 5, label: 'Character' },
                { id: 6, label: 'Spell' },
                { id: 7, label: 'Background' },
            ],
        }
    ])
    const markdownContentRef = useRef<HTMLDivElement>(null);
    const mentionContentRef = useRef<HTMLDivElement>(null);
    const statBlockRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // Function to update window height
        const updateWindowHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        // Initial update
        updateWindowHeight();

        getMonsters();

        // Add event listener to update on window resize
        window.addEventListener('resize', updateWindowHeight);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowHeight);
        };
    }, []);

    useEffect(() => {
        const monsterArr: Array<{ id: number; label: string; content: string }> = []
        monsters.map((item, index) => {
            monsterArr.push({ id: index + 3, label: extractMonsterTitle(item.content), content: item.content })
        })

        setTreeData([
            {
                id: 1,
                label: 'Campaign',
                children: [
                    {
                        id: 2,
                        label: 'Monster',
                        children: monsterArr,
                    },
                    { id: 5, label: 'Character' },
                    { id: 6, label: 'Spell' },
                    { id: 7, label: 'Background' },
                ],
            }
        ])
    }, [monsters])


    const setClickedComponent = (component_id: string) => {
        clickedComponent = component_id;
    }

    const extractMonsterTitle = (markdown: string): string | "" => {
        // Regular expression to match lines starting with ## followed by text
        const titleRegex = /^##\s*(.*)$/m;

        // Extract the first match group
        const match = markdown.match(titleRegex);

        // Return the title or null if not found
        return match ? match[1].trim() : "";
    }

    const getMonsters = () => {
        try {
            axios.post(URLCONST.getMonstersAPI).then((response: any) => {
                if (response.status == 200 && response?.data) {
                    const result = response.data;
                    setMonsters(result.result);
                } else {
                    throw new Error("Request failed with status: " + response.status);
                }
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleWindowResize = (newHeight: number) => {
        if (clickedComponent == MARKDOWN_COMPNENT) {
            if (markdownContentRef.current && newHeight) {
                setMarkdownOffsetX(markdownContentRef.current.offsetTop)
                const height = newHeight - markdownContentRef.current.offsetTop
                setMarkdownContentHeight(height);
            }
        } else if (clickedComponent == MENTION_COMPNENT) {
            if (mentionContentRef.current && newHeight) {
                setMentionOffsetX(mentionContentRef.current.offsetTop)
                const height = newHeight - mentionContentRef.current.offsetTop
                setMentionContentHeight(height);
            }
        }
    };

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
                className="mt-[20px] px-[80px] flex gap-[10px]"
                style={{
                    backgroundImage: "url('/images/bg-vector.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    paddingBottom: "35px"
                }}
            >
                <Tree data={treeData} />
                <div className="flex flex-col h-full w-3/5">
                    <div ref={markdownContentRef}>
                        <MarkdownContent height={markdownContentHeight} content={content.generatedContent} />
                    </div>
                    <ResizeControl offset_x={markdownOffsetX} component_id={MARKDOWN_COMPNENT} onResize={handleWindowResize} eventChecker={setClickedComponent} />
                    <div>
                        <StatBlock height={windowHeight - markdownContentHeight - 10} />
                    </div>
                </div>
                <div className="flex flex-col h-full w-2/5">
                    <div ref={mentionContentRef}>
                        <MentionBox height={mentionContentHeight} content="" />
                    </div>
                    <ResizeControl offset_x={mentionOffsetX} component_id={MENTION_COMPNENT} onResize={handleWindowResize} eventChecker={setClickedComponent} />
                    <div>
                        <ChatContainer height={windowHeight - mentionContentHeight - 10} />
                        {/* <StatBlock height={windowHeight - mentionContentHeight - 10} /> */}
                    </div>
                </div>
            </section>
        </main>
    );
}
