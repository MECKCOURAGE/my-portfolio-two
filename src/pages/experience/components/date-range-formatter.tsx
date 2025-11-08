const formatDateRange = (
  startDate: string,
  endDate?: string,
  isPresent?: boolean
) => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null

  const sameYear = end && start.getFullYear() === end.getFullYear()

  const startMonth = start.toLocaleString("default", { month: "short" })
  const startYear = start.getFullYear()
  const endMonth = end?.toLocaleString("default", { month: "short" })
  const endYear = end?.getFullYear()

  if (isPresent) return `${startYear} - Present`
  if (end && sameYear) return `${startMonth} - ${endMonth} ${startYear}`
  if (end && !sameYear) return `${startYear} - ${endYear}`
  return `${startYear}`
}

export default formatDateRange;