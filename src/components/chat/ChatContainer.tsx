"use client";

import clsx from "clsx";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Hexagon from "@/components/chat/Hexagon";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setGeneratedContent, setTempGeneratedContent, getContent } from "@/redux/chatSlice";

import styles from "@/styles/ChatBox.module.css";

import { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { URLCONST } from "@/utils/url";


interface PromptTemplate {
  role: string;
  content: string;
}

type BackendCallback = (param: string) => void;

interface StatBlockProps { height: number; }

export const ChatContainer: React.FC<StatBlockProps> = ({ height }) => {
  const dispatch = useAppDispatch();
  const content = useAppSelector(getContent);

  const categories = [
    {
      category: "Character",
      msg: "Now, tell me, what kind of character are you looking to craft today? Your choices will shape a legend in the making!",
    },
    {
      category: "Spell",
      msg: "Mystical Magics! let's cast a spell! What type of spell do you want to cast?",
    },
    {
      category: "Monster",
      msg: "What kind of monster are you looking to bring into existence today? Your choices will shape a creature that will haunt the realms of your world",
    },
    {
      category: "Background",
      msg: "History repeats! Let's see where you come from?",
    },
  ];
  const temp = ""

  const chatInputRef = useRef<HTMLInputElement>(null);

  const [isContentGenerating, setLoading] = useState(false);
  const [messages, setMessages] = useState<PromptTemplate[]>([]);
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Set focus when the component mounts
    const chatInput = chatInputRef.current;
    if (chatInput != null) chatInput.focus();
  }, [isContentGenerating, category]);
  useEffect(() => {
    if (content.actionState == "Cancel") {
      dispatch(setGeneratedContent(content.tempGeneratedContent));
    } else if (content.actionState == "Save") {
      setLoading(true);
      saveUpdatedContent();
      dispatch(setTempGeneratedContent(content.generatedContent));
    }
  }, [content.actionState]);


  const handleMessageChange = (e: any) => {
    setPrompt(e.target.value);
  };

  const handleAskClick = async () => {
    const newPrompt = {
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, newPrompt]);

    setLoading(true);

    try {
      // Generate content using message history and last generated content
      generateMainContent(function (content) {
        dispatch(setGeneratedContent(content));
        dispatch(setTempGeneratedContent(content));
        setLoading(false);
        setPrompt("");
      });

      // Generate next question
      generateQuestion(function (questionMSG) {
        setMessages((prev: any) => [
          ...prev,
          {
            role: "assistant",
            content: questionMSG,
          },
        ]);
        setPrompt("");
      });
    } catch (error) {
      console.log(
        "something went wrong, please read the error message:",
        error,
      );
      setLoading(false);
    }
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter") {
      await handleAskClick();
    }
  };

  const handleIconClick = () => {
    handleAskClick();
  };

  const handleCategoryClick = (category: string) => () => {
    const newMessage = {
      role: "assistant",
      content: categories.filter((c) => c.category === category)[0].msg,
    };
    setMessages([newMessage]);
    setCategory(category);
  };

  // Send request for getting next question
  const generateQuestion = async (callback: BackendCallback) => {
    const messageList = [
      ...messages,
      {
        role: "user",
        content: prompt
      }
    ]
    try {
      const data = {
        message_list: messageList,
      };

      axios.post(URLCONST.generateQuestionAPI, data).then((response: any) => {
        if (response.status === 200 && response.data) {
          const result = response.data;
          callback(result.result);
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Send request for getting monster content
  const generateMainContent = async (callback: BackendCallback) => {
    const messageList = [
      ...messages,
      {
        role: "user",
        content: prompt
      }
    ]

    const data = {
      message_list: messageList,
      last_content: content.generatedContent,
    };

    try {
      axios.post(URLCONST.generateContentAPI, data).then((response: any) => {
        if (response.status == 200 && response?.data) {
          const result = response.data;
          callback(result.result);
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const saveUpdatedContent = async () => {
    const data = {
      message_list: messages,
      updated_content: content.generatedContent,
    };

    try {
      axios.post(URLCONST.saveUpdatedContentAPI, data).then((response: any) => {
        if (response.status == 200 && response?.data) {
          const result = response.data;
          if (result.result == true) {
            toast.success("Successfully Saved!");
            setLoading(false);
          } else {
            toast.error("Saving the updated content is failed. Please try again later.");
          }
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={clsx("mb-[20px] w-full")} style={{
      position: 'relative', height: height
    }}>
      <div className="flex h-full flex-col gap-[16px] rounded-2xl bg-[#151515] p-[24px]">
        <p className="rounded-lg bg-[#232438] py-3 text-center font-sans tracking-wide">
          What would you like to make?
        </p>
        <div className="flex flex-wrap">
          {categories.map((c) => (
            <button
              key={c.category}
              // className="mr-4 mt-3 rounded-xl bg-[#232338] px-2 py-1 text-[12px]"
              className={clsx(
                "mr-4 rounded-xl bg-[#1C1C2A] px-2 py-1 font-sans text-[12px] tracking-wide",
                category === c.category
                  ? "text-[#7173FA]"
                  : "text-[#707075]",
              )}
              onClick={handleCategoryClick(c.category)}
            >
              {category === c.category && "✔"} {c.category}
            </button>
          ))}
        </div>
        <div className="scroll-div-y custom-scroll-small flex flex-1 flex-col gap-[16px]">
          {messages.map((m: PromptTemplate) => (
            <div
              key={m.content ?? ""}
              className={clsx(
                "flex max-w-[80%] items-center rounded-3xl bg-[#232338] px-6 py-2 font-sans text-[18px] tracking-wide",
                m.role === "user" ? "self-end" : "self-start",
              )}
            >
              {m.role === "assistant" && (
                <img
                  src="/images/ico-chatlogo.png"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              )}

              <span className="px-4 font-sans text-[16px] font-normal">
                {m.content}
              </span>

              {m.role === "user" && (
                <img
                  src="/images/Avatar1.png"
                  alt="Bot Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {isContentGenerating ? (
          <div className={styles.loadingdiv}>
            <span className={styles.loadingtext}>Please wait...</span>
          </div>
        ) : (
          <div className="relative flex">
            <input
              className="relative w-full rounded-3xl border-[1px] border-[#7173FA] bg-[#151515] p-4 font-sans text-white"
              type="text"
              placeholder="Write a Message..."
              value={prompt}
              onChange={handleMessageChange}
              onKeyDown={handleKeyDown}
              disabled={isContentGenerating}
              ref={chatInputRef}
            />
            <button
              className="color-[#7173FA] absolute right-4 h-full"
              type="button"
              onClick={handleIconClick}
            >
              <AiOutlineSend color="#7173FA" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

