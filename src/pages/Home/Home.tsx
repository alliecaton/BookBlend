import Button from '@/components/Button/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const buttonClick = () => {
    navigate('/books')
  }
  return (
    <div>
      <Button text="Get Started" onClick={buttonClick} />
    </div>
  )
}

export default App
