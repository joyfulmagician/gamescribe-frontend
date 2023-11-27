import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Modal {
    isOpen: boolean;
    // data: {
    //     id: string;
    //     image: string;
    //     title: string;
    //     theme: string;
    //     created_at: string;
    //     content: string;
    //     rule: string;
    // };
}
const initialState: Modal = {
    isOpen: false,
    // data: {
    //     id: "1",
    //     image: "images/1.png",
    //     title: "sdfsdf",
    //     theme: "sdfsd",
    //     created_at: "2012.1.2",
    //     content: "sdfsdf",
    //     rule: ""
    // }
};

export const ModalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpen = !state.isOpen;
        },
        OpenModal(state) {
            state.isOpen = true;
        },
        CloseModal(state) {
            state.isOpen = false;
        },
        SaveModal(state, action) {
            //const id = (Math.random() * 100).toString();
            // state.isOpen = false;
            // state.data = action.payload;
            // state.data.id = id;
        }
    }
});

export const { OpenModal, CloseModal, SaveModal } = ModalSlice.actions;
export const OpenState = (state: RootState) => state.Modal;

export default ModalSlice.reducer;