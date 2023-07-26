// https://quote-garden.onrender.com/api/v3/quotes?author=Bill+Gates

import 'material-symbols'
import { CardAuthor } from './components/CardAuthor'
import { Footer } from './components/Footer'
import { Quote } from './components/Quote'
import { useEffect, useState } from 'react'
const API = 'https://quote-garden.onrender.com/api/v3/quotes/random'
function App () {
  const [quote, setQuote] = useState()
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(response => {
        const data = response.data[0]
        setQuote(data)
      }
      )
  }, [])

  return (
    <div className='w-screen p-9 flex flex-col justify-center items-center gap-8 min-h-screen bg-bg  font-Raleway  relative'>
      <header className='w-auto h-auto absolute top-[30px] right-[30px] '>
        <button className='flex items-center justify-center gap-4'>
          <p className='text-lg text-primary font-medium'>randon</p>
          <span className="material-symbols-outlined text-primary ">sync</span>
        </button>
      </header>
      <main>
        <Quote quoteText={quote.quoteText}/>
        <CardAuthor
          quoteAuthor={quote.quoteAuthor}
          quoteGenre={quote.quoteGenre}
        />
      </main>
      <Footer/>
    </div>

  )
}

export default App
