import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ModalSlice } from "./monsterSlice";
import { CampaignSlice } from "./campaignSlice";
import { ChatSlice } from "./chatSlice";
export const store = configureStore({
    reducer: {
        [ModalSlice.name]: ModalSlice.reducer,
        [CampaignSlice.name]: CampaignSlice.reducer,
        [ChatSlice.name]: ChatSlice.reducer,
    },
    devTools: true,
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
