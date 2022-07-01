import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
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