"use client";

import React from 'react';

interface ResizableComponentProps {
    height: number;
}

export const TopComponent: React.FC<ResizableComponentProps> = ({ height }) => (
    <div style={{ border: '1px solid #ddd', padding: '10px', minHeight: '50px', height }}>
        Top Resizable Content
    </div>
);

export const BottomComponent: React.FC<ResizableComponentProps> = ({ height }) => (
    <div style={{ border: '1px solid #ddd', padding: '10px', minHeight: '50px', height }}>
        Bottom Resizable Content
    </div>
);
