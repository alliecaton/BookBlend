import { configureStore } from '@reduxjs/toolkit'

import tutorialReducer from '@/state/tutorial/tutorialSlice'
import listReducer from '@/state/list/listSlice'

const store = configureStore({
  reducer: {
    tutorial: tutorialReducer,
    list: listReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
