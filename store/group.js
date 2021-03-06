import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        postLoading(state, action) {
            state.isLoading = true
        },
        postFailed(state, action) {
            state.isLoading = false
        },
        getLoading(state, action) {
            state.isLoading = true
        },
        getItems(state, action) {
            const newHash = action.payload.hash;

            state.hash = {
                ...state.hash,
                ...newHash,
            }
            state.isLoading = false
        },
        getItem(state, action) {
            const newHash = action.payload.hash;

            state.hash = {
                ...state.hash,
                ...newHash,
            }
            state.isLoading = false
        },
        cleanState() {
            return initialState
        },
    },
})