export function CardAuthor () {
  return (
    <a href="" className='w-[672px] h-[151px]  p-9 flex justify-between items-center group hover:bg-card hover:text-white '>
      <div className='flex  flex-col items-start'>
        <h2 className='font-bold text-primary text-2xl group-hover:text-white'>Bill Gates</h2>
        <p className='font-medium text-sm text-secundary'>business</p>
      </div>
      <span className="material-symbols-outlined hidden group-hover:block">arrow_right_alt</span>
    </a>
  )
}
