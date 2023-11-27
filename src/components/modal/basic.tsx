import clsx from "clsx";
import React from "react";
export function Frame({ children, open, onClose }: { children?: any; open?: boolean; onClose: () => void }) {
  return (
    <div className={
      clsx("fixed inset-0 z-10 p-8 text-white bg-gray-600/90",
        `${open ? "block" : "hidden"}`
      )}
    >
      {/* container: `max - w - sm` to make it reasonably narrow, `mx - auto` to center horizontally */}

      <div className="relative w-full max-w-2xl mx-auto mt-8">
        {/* closer in the corner */}
        <button
          className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl"
          onClick={() => onClose()}
          title="Bye bye"
        >
          <span className="text-2xl leading-7 select-none">&times;</span>
        </button>
        {/* contents */}
        <div className="overflow-hidden bg-gray-800 rounded shadow-xl">{children}</div>
      </div>
    </div>
  );
};
export function Head({ children }: { children: any }) {
  return (
    <div className="block p-4 bg-gray-900">
      <h1 className="text-lg">{children}</h1>
    </div>
  );
}

export function Body({ children }: { children: any }) {
  return (
    <div className="p-4">{children}</div>
  );
}

export const Modal = { Frame, Head, Body };