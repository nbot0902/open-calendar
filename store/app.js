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
        setCurrentCompanyId(state, action) {
            state.currentCompanyId = action.payload.currentCompanyId;
        },
        setInitialCurrentCompanyId(state, action) {
            state.currentCompanyId = action.payload.currentCompanyId;
        },
        setCurrentProjectId(state, action) {
            state.currentProjectId = action.payload.currentProjectId;
        },
        setInitialCurrentProjectId(state, action) {
            state.currentProjectId = action.payload.currentProjectId;
        },
        cleanAppState() {
            return initialState
        },
    },
})