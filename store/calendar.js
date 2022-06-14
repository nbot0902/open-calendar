import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const calendarSlice = createSlice({
    name: 'calendar',
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
            let _newHash = {};
            let _groupId = action.payload.groupId;

            _newHash[_groupId] = {
                hash: {
                    ...action.payload.hash
                }
            };

            state.hash = {
                ...state.hash,
                ..._newHash,
            }
        },
        cleanState() {
            return initialState
        },
    },
})