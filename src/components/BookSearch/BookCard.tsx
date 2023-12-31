import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { Book } from '@/types/Books'

import { RootState } from '@/state/store'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, removeFromList } from '@/state/list/listSlice'

import Modal from '@/components/Modal/Modal'

import './Bookcard.scss'

type Props = {
  book: Book
}

const BookCard: FC<Props> = ({ book }) => {
  const [saved, setSaved] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const dispatch = useDispatch()

  const list = useSelector((state: RootState) => state.list.savedList)

  useEffect(() => {
    const find = list.find((item: Book) => item.id === book.id)
    setSaved(Boolean(find))
  }, [list, book.id])

  const handleSave = () => {
    if (saved) {
      dispatch(removeFromList(book))
    }

    if (!saved) {
      dispatch(addToList(book))
    }
  }

  // TODO: replace with MUI component...
  const savedText = saved ? 'unsave' : 'save'

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const modalJsx = (
    <Modal toggle={toggleModal}>
      <div className="flex flex-col items-center">
        <img className="w-30 rounded" src={book.img} alt="" />
        <div className="font-bold whitespace-break-spaces ">{book.name}</div>
        <div className="text-sm whitespace-break-spaces ">{book.author}</div>

        <div className="text-sm whitespace-break-spaces ">{book.keywords}</div>

        <div className="divider my-1"></div>

        <div className="text-sm mt-2 whitespace-break-spaces">
          {book.description}
        </div>
      </div>
    </Modal>
  )

  return (
    <>
      <div className="relative card">
        <div
          onClick={toggleModal}
          className="flex p-3 bg-cream rounded-lg border-b-[5px] border-black border-r-[2px] max-w-[300px]"
        >
          <img className="w-30 rounded" src={book.img} alt="" />
          <div className="flex flex-col ml-3">
            <div className="font-bold whitespace-break-spaces ">
              {book.name}
            </div>
            <div className="text-sm whitespace-break-spaces ">
              {book.author}
            </div>

            <div className="divider my-1"></div>

            <div className="text-sm mt-2 whitespace-break-spaces">
              {book.description}
            </div>
          </div>
        </div>

        <div
          onClick={handleSave}
          className="absolute top-[-20px] left-[-20px] rounded-full bg-white p-2"
        >
          {savedText}
        </div>
      </div>
      {showModal && modalJsx}
    </>
  )
}

export default BookCard
