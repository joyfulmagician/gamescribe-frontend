"use client";

import React, { useState, useRef, useEffect } from 'react';

interface ResizeControlProps {
    onResize: (height: number) => void;
    eventChecker: (component_id: string) => void;
    component_id: string;
    offset_x: number;
}

let dragFlag = false;
const ICON_HEIGHT = 16;

const ResizeControl: React.FC<ResizeControlProps> = ({ onResize, eventChecker, component_id, offset_x }) => {
    const [startY, setStartY] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, comp_id: string) => {
        eventChecker(comp_id)
        dragFlag = true;
        const newHeight = e.clientY + window.scrollY - ICON_HEIGHT;
        setStartY(newHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (dragFlag && divRef.current) {
            const newHeight = e.clientY + window.scrollY - ICON_HEIGHT;
            const deltaY = newHeight - startY;
            const newTop = divRef.current.offsetTop + deltaY;

            // Update the top position only
            divRef.current.style.top = `${newTop}px`;

            console.log("New window size = ", (offset_x))

            if ((newHeight - offset_x) >= 300 && (newHeight - offset_x) <= 850) {
                onResize(newHeight);
                setStartY(newHeight);
            }

        }
    };

    const handleMouseUp = () => {
        dragFlag = false;
        eventChecker("");
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={divRef}
            className='cursor-row-resize'
            onMouseDown={(e) => handleMouseDown(e, component_id)}
        >
            <div className='flex justify-center'>
                <img src="/images/arrow-up.svg" alt="up" draggable={false} />
            </div>
            <div className='flex h-[1px] bg-[#71717A]'></div>
            <div className='flex justify-center'>
                <img src="/images/arrow-down.svg" alt="down" draggable={false} />
            </div>
        </div>
    );
};

export default ResizeControl;
