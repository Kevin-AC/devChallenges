const API = 'https://quote-garden.onrender.com/api/v3/quotes/random'
export const getQuote = () => {
  return fetch(API)
    .then(res => res.json())
    .then(response => {
      const quote = response.data[0]
      return quote
    }
    )
}
