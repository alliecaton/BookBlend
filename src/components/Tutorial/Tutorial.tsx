import { RootState } from '@/state/store'
import { useDispatch, useSelector } from 'react-redux'
import { hideTutorial } from '@/state/tutorial/tutorialSlice'

const Tutorial = () => {
  const showTutorial = useSelector(
    (state: RootState) => state.tutorial.showTutorial
  )

  const dispatch = useDispatch()

  const activeTutorial = () => {
    return (
      <div>
        <div>the tutorial is playing</div>
        <button onClick={() => dispatch(hideTutorial())}>
          click to finish tutorial
        </button>
      </div>
    )
  }

  if (showTutorial) {
    return activeTutorial()
  }

  if (!showTutorial) {
    return 'tutorial finished'
  }
}

export default Tutorial
