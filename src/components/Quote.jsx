// eslint-disable-next-line react/prop-types
export function Quote ({ quoteText }) {
  return (
    <section className='w-full h-auto  flex flex-col items-center gap-10 '>
      <span className='w-2 h-48 lg:h-[301px] bg-decoration absolute left-1 lg:left-[220px]'></span>
      <article className='w-full lg:w-[614px] min-h-[301px]' >
        <p className='text-black text-lg lg:text-4xl font-medium'>{quoteText}</p>
      </article>
    </section>
  )
}
