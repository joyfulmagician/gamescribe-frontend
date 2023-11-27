import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
const initialState: Array<{ id: string; image: string; title: string; theme: string; content: string; created_at: string; rule: string }> =
    [
        {
            id: "1",
            image: "images/IMAGE1.png",
            title: "Title",
            theme: 'theme',
            created_at: "Posted 2 hours ago",
            content: 'Lorem ipsum dolor sit amet consectetur',
            rule: "Ruleset"
        }, {
            id: "2",
            image: "images/IMAGE2.png",
            title: "Title",
            theme: 'theme',
            created_at: "Posted 3 hours ago",
            content: 'Lorem ipsum dolor sit amet consectetur',
            rule: "Ruleset"
        }, {
            id: "3",
            image: "images/IMAGE3.png",
            title: "Title",
            theme: 'theme',
            created_at: "Posted 5 hours ago",
            content: 'Lorem ipsum dolor sit amet consectetur',
            rule: "Ruleset"
        }, {
            id: "4",
            image: "images/IMAGE4.png",
            title: "Title",
            theme: 'theme',
            created_at: "Posted 6 hours ago",
            content: 'Lorem ipsum dolor sit amet consectetur',
            rule: "Ruleset"
        }
    ];
export const CampaignSlice = createSlice({
    name: "Campaign",
    initialState,
    reducers: {
        addCampaign(state, action) {
            const id = (Math.random() * 100).toString();
            const data = action.payload;
            data.id = id;
            state.unshift(data);
        }
    }
});

export const { addCampaign } = CampaignSlice.actions;
export const getCampaign = (state: RootState) => state.Campaign;

export default CampaignSlice.reducer;