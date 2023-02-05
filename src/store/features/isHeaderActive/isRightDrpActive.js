import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activity : false
}
export const rightDrpActive = createSlice({
    name : 'isRightActive',
    initialState,
    reducers : {
        setActive: (state) => {
            state.activity = !state.activity
        }
    }
})

export const { setActive } = rightDrpActive.actions;
export default rightDrpActive.reducer