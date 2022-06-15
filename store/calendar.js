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
            let _newHash = {};
            let _groupId = action.payload.groupId;


            const prevCalendarHash = state.hash[_groupId] ? state.hash[_groupId].hash : {}

            _newHash[_groupId] = {
                hash: {
                    ...prevCalendarHash,
                    ...action.payload.hash
                }
            };

            state.hash = {
                ...state.hash,
                ..._newHash,
            }
        },
        getItem(state, action) {
            let _newHash = {};
            let _groupId = action.payload.groupId;

            const prevCalendarHash = state.hash[_groupId] ? state.hash[_groupId].hash : {}

            _newHash[_groupId] = {
                hash: {
                    ...prevCalendarHash,
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