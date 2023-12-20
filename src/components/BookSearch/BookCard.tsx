import { FC } from 'react'
import './Bookcard.scss'
import { Book } from '@/types/Books'

type Props = {
  book: Book
}

const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className="flex p-3 bg-cream rounded list">
      <img className="w-30 rounded" src={book.img} alt="" />
      <div className="flex flex-col ml-3">
        <div className="font-bold">{book.title}</div>
        <div className="text-sm">{book.author}</div>
      </div>
    </div>
  )
}

export default BookCard
