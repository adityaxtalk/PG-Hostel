import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    userDetails: [],
    loading: false,
    currentUser: localStorage.getItem('user') || '',
    error: null,
    response: null,
    authenticated: localStorage.getItem('access-token') ? true : false ,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequest: (state) => {
            state.status = 'loading'
        },
        authSuccess: (state, action) => {
            state.success = 'false'
            state.currentUser = action.payload
            localStorage.setItem("user", action.payload.email);
            localStorage.setItem("access-token", action.payload.accessToken);
            state.response=null
            state.error=null
            state.authenticated = true
        },
        authFailed: (state, action) => {
            state.status = "failed"
            state.response=action.payload;
        },
        authError: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        },
        authLogout: (state) => {
            localStorage.removeItem('user');
            localStorage.removeItem('access-token');
            state.currentUser = null;
            state.status= null;
            state.error=null;
            state.authenticated = false;
        }
    }
});

export const {authRequest, authError, authLogout, authFailed, authSuccess} = userSlice.actions;
export const userReducer = userSlice.reducer;