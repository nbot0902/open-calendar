import logger from 'redux-logger';
import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
    EnhancedStore,
} from '@reduxjs/toolkit'

import {
    persistReducer,
    createMigrate,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { appSlice } from '../store/app'
import { userSlice } from '../store/user'
import { calendarSlice } from '../store/calendar'
import { scheduleSlice } from '../store/schedule'
import { eventSlice } from '../store/event'
import { groupSlice } from '../store/group'
import { myEventSlice } from '../store/my_event'

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null)
        },
        setItem(_key, value) {
            return Promise.resolve(value)
        },
        removeItem(_key) {
            return Promise.resolve()
        },
    }
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage()

const rootReducer = combineReducers({
    app: appSlice.reducer,
    user: userSlice.reducer,
    calendar: calendarSlice.reducer,
    schedule: scheduleSlice.reducer,
    event: eventSlice.reducer,
    myEvent: myEventSlice.reducer,
    group: groupSlice.reducer,
})

const migrationFunction = (state) => {
    return {
        ...state,
    }
}

const migrations = {
    app: migrationFunction,
    user: migrationFunction,
    calendar: migrationFunction,
    schedule: migrationFunction,
    event: migrationFunction,
    myEvent: migrationFunction,
    group: migrationFunction,
}

const persistConfig = {
    key: 'open_calendar',
    storage,
    migrate: createMigrate(migrations, { debug: true }),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
        ],
    },
})

const devList = [...defaultMiddleware, logger];
const prodList = [...defaultMiddleware];

export const useStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: process.env.NODE_ENV == "development" ? devList : prodList,
    })
}