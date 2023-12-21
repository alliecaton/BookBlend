import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { Book } from '@/types/Books'

import { RootState } from '@/state/store'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, removeFromList } from '@/state/list/listSlice'

import './Bookcard.scss'

// import { FavoriteBorder } from '@/mui/material'

type Props = {
  book: Book
}

const BookCard: FC<Props> = ({ book }) => {
  const [saved, setSaved] = useState(false)

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

  return (
    <div className="relative card">
      <div className="flex p-3 bg-cream rounded-lg border-b-[5px] border-black border-r-[2px]">
        <img className="w-30 rounded" src={book.img} alt="" />
        <div className="flex flex-col ml-3">
          <div className="font-bold">{book.title}</div>
          <div className="text-sm">{book.author}</div>

          <div className="divider my-1"></div>

          <div className="text-sm mt-2">{book.description}</div>
        </div>
      </div>

      <div
        onClick={handleSave}
        className="absolute top-[-20px] left-[-20px] rounded-full bg-white p-4"
      >
        {savedText}
      </div>
    </div>
  )
}

export default BookCard
