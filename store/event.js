import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getItems(state, action) {
            const newHash = action.payload.hash;

            state.hash = {
                ...state.hash,
                ...newHash,
            }
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