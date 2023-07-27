// eslint-disable-next-line react/prop-types
export function Quote ({ quoteText }) {
  return (
    <section className='w-auto h-auto flex flex-col items-center gap-10'>
      <span className='w-2 h-[301px] bg-decoration absolute left-[220px]'></span>
      <article className='w-[614px] min-h-[301px]' >
        <p className='text-black text-4xl font-medium'>{quoteText}</p>
      </article>
    </section>
  )
}
