import { Card } from './components/Card'
import { ParametersCard } from './components/ParametersCard'
import { CurrentWeather } from './components/CurrentWeather'
import { useMapedWeather } from './hooks/useMapedWeather'
import { useMapedForecast } from './hooks/useMapedForecast'

function App () {
  const { daysList } = useMapedWeather()
  // console.log(daysList)
  const { data } = useMapedForecast()

  return (
    <div className="w-full h-screen font-Raleway flex flex-col items-center lg:justify-center lg:flex-row lg:relative lg:overflow-hidden">
      <CurrentWeather/>
      <main className='w-full py-4 grid place-items-center  gap-8 lg:w-4/5 ' >
        <section className='grid grid-cols-2  gap-6 lg:flex '>
          {
            daysList.map((day, index) => (
              <Card key={index}
                day={day.date}
                tempMax={day.tempMax}
                tempMin={day.tempMin}
                icon={day.icon}
              />
            ))
          }

        </section>
        <h2 className='text-4xl text-primaryText font-semibold '>Today’s Hightlights </h2>
        <section className='grid lg:grid-cols-2 gap-4  lg:gap-8 '>
          <ParametersCard title='Wind Status' parameter={data.wind} measure='mph'/>
          <ParametersCard title='Humidity' parameter={data.humidity} humidity={data.humidity} measure='%' />
          <ParametersCard title='Visibility' parameter={(data.visibility / 1609.34).toFixed(2)}measure='miles' />
          <ParametersCard title='Pressure' parameter={data.pressure} measure='mb'/>
        </section>
      </main>
      <footer className='my-8 text-secundaryText lg:absolute lg:bottom-0 lg:my-0'>created by Kevin-AC devChallenges.io</footer>
    </div>
  )
}

export default App
