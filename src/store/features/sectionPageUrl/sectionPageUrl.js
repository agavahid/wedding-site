import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pageUrl : 'https://api.wed.az/edu/search?page=1'
}
export const parsePage = createSlice({
    name : 'pageUrl',
    initialState,
    reducers : {
        setPage: (state,action) => {
            state.pageUrl = action.payload
        },
        resetPage:(state) =>{
            state.pageUrl = "https://api.wed.az/edu/search?page=1"
        }
    }
}) 

export const { setPage, resetPage } = parsePage.actions;
export default parsePage.reducer