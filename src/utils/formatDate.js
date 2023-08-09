export function formatDate (dateString, timezone) {
  if (!timezone) return
  const options = {
    timeZone: `Etc/GMT${timezone / 3600}`,
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  }
  const fecha = new Date(dateString)
  const formattedDate = fecha.toLocaleString('en', options)

  return formattedDate
}
