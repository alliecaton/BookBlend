import './Button.scss'

interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'large' | 'reg'
}

const Button = ({ text, onClick, variant = 'reg' }: ButtonProps) => {
  return (
    <button className={'btn btn-' + variant} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
