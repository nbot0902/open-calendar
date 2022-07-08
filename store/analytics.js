import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        postLoading(state, action) {
            state.isLoading = true
        },
        postFailed(state, action) {
            state.isLoading = false
        },
        getItem(state, action) {
            const newHash = action.payload.hash;

            state.hash = {
                ...state.hash,
                ...newHash,
            }
        },
        cleanState() {
            return initialState
        },
    },
})