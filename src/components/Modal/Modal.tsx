import { ReactNode } from 'react'
import './ModalWrapper.scss'

import Button from '@/components/Button/Button'

const BookModal = ({
  toggle,
  children,
}: {
  toggle: () => void
  children: ReactNode
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}

        <div>
          <Button onClick={toggle} text="CLOSE" />
        </div>
      </div>
    </div>
  )
}

export default BookModal
