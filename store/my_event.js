import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    hash: {},
    isLoading: false
}

export const myEventSlice = createSlice({
    name: 'myEvent',
    initialState,
    reducers: {
        getItems(state, action) {
            const _hash = action.payload.hash;
            const _groupId = action.payload.groupId;

            var newHash = {};

            newHash[_groupId] = {
                hash: _hash
            }

            state.hash = {
                ...state.hash,
                ...newHash,
            }
        },
        getMoreItems(state, action) {
            const _hash = action.payload.hash;
            const _groupId = action.payload.groupId;
            const _currentHash = state.hash[_groupId].hash

            var newHash = {};

            newHash[_groupId] = {
                hash: {
                    ..._currentHash,
                    ..._hash
                }
            }

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