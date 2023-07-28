import { useState, useEffect } from 'react'
import { getQuote } from '../services/quote'
export function useRandom () {
  const [quote, setQuote] = useState()

  const getRandomQuote = () => {
    getQuote().then(setQuote)
  }
  // optener frace aleatoria
  useEffect(getRandomQuote, [])
  return { getRandomQuote, quote }
}
