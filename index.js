class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }

  startDate() {
    return Date()
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInteger(avenue){
     return eastWest.indexOf(avenue)
   }
  blocksTravelled()
}
