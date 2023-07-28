import { useState, useEffect } from 'react'
export function useAuthorQuotes ({ quoteAuthor }) {
  const [Authorquote, setAuthorQuote] = useState([])
  useEffect(() => {
    if (!quoteAuthor) return
    fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${quoteAuthor}`)
      .then(res => res.json())
      .then(response => {
        setAuthorQuote(response.data)
      })
  }, [quoteAuthor])
  return { Authorquote }
}
