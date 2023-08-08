import { useState, useEffect } from 'react'

export function useCoords () {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(position.coords.latitude, position.coords.longitude)
      })
    }
  }, [])

  return { latitude, longitude }
}
