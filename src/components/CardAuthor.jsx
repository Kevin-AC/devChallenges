// eslint-disable-next-line react/prop-types
export function CardAuthor ({ quoteAuthor, quoteGenre }) {
  return (
    <a className='w-[672px] h-[151px]  p-9 flex justify-between items-center group hover:bg-card hover:text-white '>
      <div className='flex  flex-col items-start'>
        <h2 className='font-bold text-primary text-2xl group-hover:text-white'>{quoteAuthor}</h2>
        <p className='font-medium text-sm text-secundary'>{quoteGenre}</p>
      </div>
      <span className="material-symbols-outlined hidden group-hover:block">arrow_right_alt</span>
    </a>
  )
}
