import { createSlice } from '@reduxjs/toolkit'

export interface TutorialState {
  showTutorial: boolean
}

const initialState: TutorialState = {
  showTutorial: true,
}

export const TutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    hideTutorial: (state) => {
      // If user has seen the tutorial for this session, we don't need to show it again until next session
      // TODO: maybe store in localStorage?? TBD
      state.showTutorial = false
    },
  },
})

export const { hideTutorial } = TutorialSlice.actions

export default TutorialSlice.reducer
