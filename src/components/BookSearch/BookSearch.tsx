import { useState } from 'react'

import Button from '@/components/Button/Button'
import BookCard from '@/components/BookSearch/BookCard'

import { Book } from '@/types/Books'

const fakeData = [
  {
    id: 1,
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    description: 'Depressing af',
    img: 'https://placehold.co/100x140',
  },
  {
    id: 2,
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    description: 'Depressing af',
    img: 'https://placehold.co/100x140',
  },
]

const BookSearch = () => {
  const [search, setSearch] = useState<string>('')
  const [results, setResults] = useState<Book[]>([])

  const fetchResults = async () => {
    // fetch with query
    setResults(fakeData)
  }

  return (
    <>
      <div className="flex flex-col items-center w-[50%] my-16">
        <input
          className="rounded border border-black px-3 py-2 w-full mb-3"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
        />

        <Button text="SEARCH" onClick={fetchResults} />
      </div>

      <div className="flex items-center flex-wrap">
        {results.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </>
  )
}

export default BookSearch
