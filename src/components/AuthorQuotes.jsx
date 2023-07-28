import { useAuthorQuotes } from '../hooks/useAuthorQuotes'
import { Quote } from './Quote'

/* eslint-disable react/prop-types */

export function AuthorQuote ({ quoteAuthor }) {
  const { Authorquote } = useAuthorQuotes({ quoteAuthor })
  return (
   <section className='flex flex-col gap-20 mb-10'>
      <h2 className='font-bold text-4xl mt-10 text-card'>{quoteAuthor}</h2>

        {
          Authorquote.map((data) => (
            <Quote key={data._id}
              quoteText={data.quoteText}
            />)

          )
        }

   </section>
  )
}
