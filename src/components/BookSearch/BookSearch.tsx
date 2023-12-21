import { useState } from 'react'

import Button from '@/components/Button/Button'
import BookCard from '@/components/BookSearch/BookCard'

import { useFetchAi } from '@/hooks/useFetchAi'

import { Book } from '@/types/Books'

interface BookData {
  books: Book[]
}

const BookSearch = () => {
  const [search, setSearch] = useState<string>('')

  const { loading, data, error, fetchAI } = useFetchAi<BookData>()

  const fetchResults = async () => {
    await fetchAI({
      url: '/ai',
      method: 'post',
      data: {
        search,
      },
    })
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

      {loading && <div>Loading...</div>}

      {error && <div>Error...</div>}

      <div className="flex items-center justify-center flex-wrap gap-6">
        {!loading &&
          !error &&
          data?.books &&
          data.books?.map((book, i) => <BookCard book={book} key={i} />)}
      </div>
    </>
  )
}

export default BookSearch
