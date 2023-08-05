export function formatDate (dateString) {
  const fecha = new Date(dateString)
  const diaSemana = fecha.toLocaleString('en', { weekday: 'short' })
  const dia = fecha.getDate()
  const mes = fecha.toLocaleString('en', { month: 'short' })
  const formattedDate = `${diaSemana}, ${dia} ${mes}`
  return formattedDate
}
