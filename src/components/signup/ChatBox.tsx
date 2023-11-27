"use client";

import clsx from "clsx";
import { useState } from "react";

async function generateQuestion(prompt: string) {
  try {
    const data = {
      message_list: [{ role: "user", content: prompt }],
      last_content: "",
    };

    const response = await fetch(
      "https://gamescribe.kneeshaw-developments.com/generate_question",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function ChatBox() {
  const [locked, setLocked] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [prompt, setPrompt] = useState("");

  const handleMessageChange = (e: any) => {
    setPrompt(e.target.value);
  };

  const handleAskClick = async () => {
    setMessages((prev: any) => [
      ...prev,
      {
        msg: prompt,
        side: "right",
      },
    ]);

    setPrompt("");
    setLocked(true);

    try {
      const responseData = await generateQuestion(prompt);

      setMessages((prev: any) => [
        ...prev,
        {
          msg: responseData.result,
          side: "left",
        },
      ]);

      setLocked(false);
    } catch (error) {
      console.log(
        "something went wrong, please read the error message:",
        error,
      );
      setLocked(false);
    }
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter") {
      await handleAskClick();
    }
  };

  return (
    <div className="flex h-full min-h-[750px] flex-col gap-[16px] rounded-2xl p-[24px]">
      <div className="flex flex-1 flex-col gap-[16px] overflow-y-auto px-[16px]">
        {messages.map((m: any) => (
          <div
            key={m.msg}
            className={clsx(
              "flex max-w-[80%] items-center rounded-3xl bg-[#232338] text-[18px]",
              m.side === "right" ? "self-end" : "self-start",
            )}
          >
            {m.side === "left" && (
              <img
                src="/images/ico-chatlogo.png"
                alt="User Avatar"
                className="h-[40px] w-[40px] rounded-full"
              />
            )}

            <span className="p-2 text-[16px] font-normal">{m.msg}</span>

            {m.side === "right" && (
              <img
                src="/images/Avatar1.png"
                alt="Bot Avatar"
                className="h-[40px] w-[40px] rounded-full"
              />
            )}
          </div>
        ))}
      </div>

      {locked ? (
        <button
          type="button"
          className="rounded-xl bg-indigo-500 p-2 text-[20px] text-white"
          disabled
        >
          Generating...
        </button>
      ) : (
        <input
          className="rounded-xl border-2 bg-[#151515] p-2 text-white"
          type="text"
          placeholder="Write a Prompt..."
          value={prompt}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          disabled={locked}
        />
      )}
    </div>
  );
}
