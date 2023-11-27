import React, { useState, ChangeEvent } from "react";
import { Modal as modal } from "./basic";
import { CloseModal, OpenState } from "@/redux/monsterSlice";
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import { addCampaign } from '@/redux/campaignSlice';
export default function campaignPartModal() {
    const [form, setForm] = useState({
        id: "-1",
        image: "images/IMAGE4.png",
        title: "",
        theme: 'theme',
        created_at: "Posted 6 hours ago",
        content: 'Lorem ipsum dolor sit amet consectetur',
        rule: "Ruleset"
    })
    const dispatch = useAppDispatch();
    const data = useAppSelector(OpenState);
    const handleClose = () => {
        dispatch(CloseModal());
    }
    const handleOk = () => {
        if (form.title === "") {
            alert("You don't input title");
            return;
        }
        dispatch(CloseModal());
        dispatch(addCampaign(form));

    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <modal.Frame
            open={data.isOpen}
            onClose={handleClose}
        >
            <modal.Head>Monster</modal.Head>
            < modal.Body >
                <div className="flex flex-col space-y-2" >
                    <input type="file" name="image" />
                    <input
                        className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
                        placeholder="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                    <input
                        className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
                        placeholder="Content"
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                    />
                    <input
                        className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
                        placeholder="Ruleset"
                        name="rule"
                        value={form.rule}
                        onChange={handleChange}
                    />
                    <button onClick={handleOk} className="text-gray-100 border-2 border-blue-700 bg-blue-600 rounded shadow-xl p-2 outline-none focus:border-blue-300" >
                        Add
                    </button>
                </div>
            </modal.Body>
        </modal.Frame>
    )
};