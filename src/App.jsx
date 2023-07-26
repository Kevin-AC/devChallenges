// https://quote-garden.onrender.com/api/v3/quotes?author=Bill+Gates
// https://quote-garden.onrender.com/api/v3/authors
import 'material-symbols'

import { Quote } from './components/Quote'
import { CardAuthor } from './components/CardAuthor'
function App () {
  return (
    <div className='w-screen p-9 flex flex-col justify-center items-center gap-8 min-h-screen bg-bg  font-Raleway  relative'>
      <header className='w-auto h-auto absolute top-[30px] right-[30px] '>
        <button className='flex items-center justify-center gap-4'>
          <p className='text-lg text-primary font-medium'>randon</p>
          <span className="material-symbols-outlined text-primary ">sync</span>
        </button>
      </header>
      <Quote/>
      <CardAuthor/>
      <footer className='absolute bottom-0'>
        <p>created by <strong>Kevin-AC</strong> - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default App
