import { IconCurrentLocation, IconMapPinFilled } from '@tabler/icons-react'
import { useWeather } from '../hooks/useWeather'

export function CurrentWeather () {
  const { data } = useWeather()

  return (
    <section className="w-full h-screen   bg-cardBG  relative">
      <div className='absolute w-full h-full imgBG'></div>
      <header className='text-primaryText flex justify-between p-5'>
        <button className='bg-buttonSeachP w-[161px] h-[40px]'>Search for place</button>
        <button className='bg-buttonSeachP w-[40px] h-[40px] rounded-full grid place-items-center'><IconCurrentLocation /></button>
      </header>
      <article className=' w-full mt-16 h-auto grid place-items-center gap-8'>
        <img src="/Shower.png" alt="" />
        <p className='text-8xl font-medium text-primaryText'>{data?.main.temp}<span className='text-6xl font-normal text-secundaryText'>°c</span> </p>
        <p className='text-5xl font-medium text-secundaryText'>{data?.weather[0].description}</p>
        <div className='flex gap-2 text-lg text-infoText'>
          <p>Today</p>
          <p>Fri,5 jun</p>
        </div>
        <div className='flex gap-2 text-infoText font-medium'>
          <IconMapPinFilled />
          <p>{data?.name}</p>
        </div>
      </article>
    </section>
  )
}
