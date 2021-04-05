import moment from 'moment'
let enumerateDaysBetweenDates = function(startDate, endDate) {
  let dates = []

  let currDate = moment(startDate).startOf('day')
  let lastDate = moment(endDate).startOf('day')
  dates.push(startDate)
  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    //console.log(currDate.toDate())
    dates.push(currDate.clone())
  }
  dates.push(lastDate)
  return dates
}

export default enumerateDaysBetweenDates
