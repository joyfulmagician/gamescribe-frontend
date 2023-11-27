import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
const initialState: { generatedContent: string; tempGeneratedContent: string, actionState: string } =
{
    generatedContent: "",
    tempGeneratedContent: "",
    actionState: ""
}

export const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setGeneratedContent(state, action) {
            state.generatedContent = action.payload
        },
        setTempGeneratedContent(state, action) {
            state.tempGeneratedContent = action.payload
        },
        setActionState(state, action) {
            state.actionState = action.payload
        }
    }
});

export const { setGeneratedContent, setTempGeneratedContent, setActionState } = ChatSlice.actions;
export const getContent = (state: RootState) => state.chat;

export default ChatSlice.reducer;