import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser(state, action) {
            const newHash = action.payload.hash;

            state.hash = {
                ...state.hash,
                ...newHash,
            }
        },
        cleanUserState() {
            return initialState
        },
    },
})