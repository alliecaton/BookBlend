import { createSlice } from '@reduxjs/toolkit'

import { PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/types/Books'

export interface ListState {
  savedList: Book[]
}

const initialState: ListState = {
  savedList: [],
}

export const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList: (state: ListState, action: PayloadAction<Book>) => {
      state.savedList.push(action.payload)
    },
    removeFromList: (state: ListState, action: PayloadAction<Book>) => {
      state.savedList = state.savedList.filter(
        (book) => book.id !== action.payload.id
      )
    },
  },
})

export const { addToList, removeFromList } = ListSlice.actions

export default ListSlice.reducer
