import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    currentUserId: null,
    currentCompanyId: null,
    currentProjectId: null,
    isLogout: true
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLogout(state, action) {
            state.isLogout = action.payload.isLogout;
        },
        setCurrentUserId(state, action) {
            state.currentUserId = action.payload.currentUserId;
        },
        cleanState() {
            return initialState
        },
    },
})