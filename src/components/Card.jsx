/* eslint-disable react/prop-types */
import { formatDate } from '../utils/formatDate'
export function Card ({ day, tempMax, tempMin }) {
  const formattedDate = formatDate(day)
  return (
    <article className="w-[120px] h-[177px] bg-cardBG grid place-items-center">
      <h2 className="text-base text-primaryText">{formattedDate}</h2>
      <img className="w-16" src="/HeavyRain.png" alt="" />
      <div className="flex gap-4 text-sm ">
        <p className="text-primaryText ">{tempMax}°c</p>
        <p className="text-secundaryText">{tempMin}°c</p>
      </div>
    </article>
  )
}
