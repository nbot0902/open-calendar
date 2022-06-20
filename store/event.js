import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getLoading(state, action) {
            state.isLoading = true
        },
        getFailed(state, action) {
            state.isLoading = false
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