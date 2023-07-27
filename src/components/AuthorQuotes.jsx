import { useEffect, useState } from 'react'
import { Quote } from './Quote'

/* eslint-disable react/prop-types */
export function AuthorQuote ({ quoteAuthor }) {
  const [quote, setQuote] = useState([])
  useEffect(() => {
    fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${quoteAuthor}`)
      .then(res => res.json())
      .then(response => {
        setQuote(response.data)
      })
  }, [quoteAuthor])
  return (
   <section className='flex flex-col gap-20 mb-10'>
      <h2 className='font-bold text-4xl mt-10 text-card'>{quoteAuthor}</h2>

      {quote.map((data) => (
      <Quote key={data._id}
          quoteText={data.quoteText}
      />)

      )}

   </section>
  )
}
