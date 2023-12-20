import Button from '@/components/Button/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const buttonClick = () => {
    navigate('/books')
  }
  return (
    <div className="mt-32 h-full flex flex-col items-center">
      <div className="text-white text-lg mb-12">
        BookBlend is a book recommendations app that helps you find your next
        read 📚
      </div>

      <div>
        <Button text="Get Started" variant="large" onClick={buttonClick} />
      </div>
    </div>
  )
}

export default App
