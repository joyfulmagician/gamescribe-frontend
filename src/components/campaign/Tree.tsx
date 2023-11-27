"use client";

import React, { FormEvent, useState } from 'react';
import clsx from "clsx";
import CampaignPartModal from '../modal/campaignPartModal';
import { useAppDispatch } from '@/redux/hook';
import { setGeneratedContent, setTempGeneratedContent } from '@/redux/chatSlice';
import { OpenModal } from '@/redux/monsterSlice';

import styles from "@/styles/Encyclopedia.module.css";
import style_m from "@/styles/Monster.module.css";
interface TreeNode {
    id: number;
    label: string;
    content?: string;
    children?: TreeNode[];
}

interface TreeProps {
    data: TreeNode[];
}

const TreeNode: React.FC<{ node: TreeNode }> = ({ node }) => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(false);
    const handleToggle = () => {

        if (node.content) {
            dispatch(setGeneratedContent(node.content));
            dispatch(setTempGeneratedContent(node.content));
        }
        //setContent(node.content)
        setIsOpen(!isOpen);
    };
    const handleClickNode = (e: FormEvent<HTMLDivElement>) => {
        setSelect(!select);
    }
    return (
        <>
            {node.label && <div className={clsx('tree-list cursor-pointer py-[10px]', styles.treeNodeLabel)}>
                <div className='flex gap-[5px]' onClick={handleToggle} >
                    {node.children && (<img src={isOpen ? "/images/t_open.svg" : "/images/t_close.svg"}></img>)} {node.label}
                </div>

                {isOpen && node.children && (
                    <div style={{ marginLeft: '20px' }}>
                        {node.children.map((child) => (
                            <TreeNode key={child.id} node={child} />
                        ))}
                    </div>
                )}
            </div>}
        </>
    );
};

const Tree: React.FC<TreeProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const handleOpenModal = () => {
        dispatch(OpenModal());
    }
    return (
        <div className='h-full w-1/5' style={{ height: '100vh' }}>
            <div className='h-[30px] flex justify-end items-center gap-[8px]'>
                <a href="#">
                    <img src='../icons/frame.svg' />
                </a>
                <a href="#">
                    <img src='../icons/search-normal.svg' />
                </a>
                <a href="#">
                    <img src='../icons/filter.svg' />
                </a>
            </div>
            <div className='scroll-div-y custom-scroll-small' style={{ height: "calc(100vh - 55px)" }}>
                {data.map((node) => (
                    <TreeNode key={node.id} node={node} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-[8px]">
                <a onClick={handleOpenModal} className={clsx(
                    style_m["custom-btn"],
                )} style={{ cursor: "pointer" }}>
                    Create
                    <img src="../icons/add.svg" />
                </a>
                <a href='#' className={clsx(
                    style_m["custom-btn-2"],
                )}>
                    ⌘ B
                </a>
            </div>
            <CampaignPartModal />
        </div>
    );
};

export default Tree;
