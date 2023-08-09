import { IconCurrentLocation, IconMapPinFilled, IconX, IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useMapedForecast } from '../hooks/useMapedForecast'
import { useMapedWeather } from '../hooks/useMapedWeather'
import { useCoords } from '../hooks/useCoords'
import { formatDate } from '../utils/formatDate'

export function CurrentWeather () {
  const [open, setOpen] = useState(false)
  const { timezone, actualDay } = useMapedWeather()
  const { data } = useMapedForecast()
  const timeZone = timezone
  const today = actualDay
  const formattedDate = formatDate(today, timeZone)

  const { latitude, longitude } = useCoords()
  const handleClick = () => {
    setOpen(!open)
    console.log('open')
  }
  const handleLocation = () => {
    console.log(latitude, longitude)
  }
  const icons = `https://openweathermap.org/img/wn/${data.WeatherIcon}@2x.png`
  return (
    <section className="w-full h-screen bg-cardBG relative lg:w-2/5">
      <header className='text-primaryText flex justify-between p-5 z-50 '>
        <button className='bg-buttonSeachP w-[161px] h-[40px]' onClick={handleClick}>Search for place</button>
        <button className='bg-buttonSeachP w-[40px] h-[40px] rounded-full grid place-items-center' onClick={handleLocation}><IconCurrentLocation /></button>
      </header>
      { open &&
        <section className='bg-cardBG w-full h-full absolute  top-0 z-40 p-4'>
          <button className='text-primaryText absolute right-4 ' onClick={handleClick}><IconX /></button>
          <div className='flex gap-4 top-14 relative  text-infoText'>
            <span className='absolute  pt-3 pl-3 '><IconSearch /></span>
            <input className='bg-cardBG h-12 w-full border-primaryText border pl-10  placeholder:text-infoText ' type="text" name="search" id="search" placeholder='search location' />
            <button className='bg-buttonSearch text-primaryText w-[86px] h-12 font-medium'>search</button>
          </div>
        </section>
      }
      <div className='absolute w-full h-96 imgBG z-10 '></div>
      <article className='w-full mt-16 mb-4 h-auto grid place-items-center gap-8 '>
        <img width={150} src={icons} alt="weather icon" />
        <p className='text-6xl font-medium text-primaryText'>{data.temp}<span className='text-6xl font-normal text-secundaryText'>°c</span> </p>
        <p className='text-4xl font-medium text-secundaryText'>{data.description}</p>
        <div className='flex gap-2 text-lg text-infoText'>
          <p>Today</p>
          <p>{formattedDate}</p>
        </div>
        <div className='flex gap-2 text-infoText font-medium'>
          <IconMapPinFilled />
          <p>{data.city}</p>
        </div>
      </article>
    </section>
  )
}
