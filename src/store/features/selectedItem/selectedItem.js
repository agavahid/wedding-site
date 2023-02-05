import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]
const selectedItem = createSlice({
    name : 'selected',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})
export const { postAdded } = selectedItem.actions;
export default selectedItem.reducer;