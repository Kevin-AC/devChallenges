import { Card } from './components/Card'
import { ParametersCard } from './components/ParametersCard'
import { CurrentWeather } from './components/CurrentWeather'
import { useMapedWeather } from './hooks/useMapedWeather'

function App () {
  const { daysList } = useMapedWeather()
  // console.log(daysList)

  return (
    <div className="font-Raleway grid place-items-center min-h-screen">
      <CurrentWeather/>
      <main className='w-full h-auto grid place-items-center p-6 gap-8' >
        <section className='grid grid-cols-2 place-content-center gap-6 '>
          {
            daysList.map((day, index) => (
              <Card key={index}
                day={day.date}
                tempMax={day.tempMax}
                tempMin={day.tempMin}
              />
            ))
          }

        </section>
        <h2 className='text-4xl text-primaryText font-semibold'>Today’s Hightlights </h2>
        <section className='flex flex-wrap gap-4 justify-center'>

          <ParametersCard/>
          <ParametersCard />
          <ParametersCard />
          <ParametersCard />
        </section>
      </main>
      <footer className='my-8 text-secundaryText'>created by username - devChallenges.io</footer>
    </div>
  )
}

export default App
