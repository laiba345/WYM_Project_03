import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './module/counter'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store
