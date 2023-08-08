/* eslint-disable react/prop-types */
export function ParametersCard ({ title, parameter, measure, humidity }) {
  // eslint-disable-next-line no-return-assign
  return (
    <article className="w-[328px] h-[204px]  p-4 bg-cardBG text-primaryText grid place-items-center gap-4">
      <h2 className="text-base">{title}</h2>
      <p className="text-5xl font-bold">{parameter}<span className="text-3xl font-normal">{measure}</span></p>

      <div className={`flex gap-4  ${title === 'Wind Status' ? '' : 'hidden'}`}>
          <img src="" alt="" />
          <p>wsw</p>
      </div>
     <div>
        <progress className={` ${title === 'Humidity' ? '' : 'hidden'}`} id="file" max='100' value={humidity}>{humidity}</progress>
     </div>

    </article>
  )
}
