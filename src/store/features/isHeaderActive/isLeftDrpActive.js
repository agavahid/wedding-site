import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activity : false
}
export const leftDrpActive = createSlice({
    name : 'isLeftActive',
    initialState,
    reducers : {
        setActive: (state) => {
            console.log(state.activity);
            state.activity = !state.activity
        }
    }
})

export const { setActive } = leftDrpActive.actions;
export default leftDrpActive.reducer