import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn : false
}
export const loginHandler = createSlice({
    name : 'login',
    initialState,
    reducers : {
        setLogin: (state) => {
            state.isLoggedIn = true
        },
        setLogOut: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const { setLogin, setLogOut } = loginHandler.actions;
export default loginHandler.reducer