// @ts-nocheck
export function calculeteRide(segments) {
  let fare = 0;
  for (const segment of segments) {
    if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
      if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {

        if (segment.date.getDate() === 1) {
          fare += segment.distance * 1.5;
        } else {
          // overnight

          if (segment.date.getHours() >= 22 || segment.date.getHours() <= 6) {

            // not sunday
            if (segment.date.getDay() !== 0) {

              fare += segment.distance * 3.90;
              // sunday
            } else {
              fare += segment.distance * 5;

            }
          } else {
            // sunday
            if (segment.date.getDay() === 0) {

              fare += segment.distance * 2.9;

            } else {
              fare += segment.distance * 2.10;
            }
          }


        }

      } else {
        // console.log(d);
        return -2;
      }
    } else {
      // console.log(distance);

      return -1;
    }

  }
  if (fare < 10) {
    return 10;
  } else {
    return fare;
  }
}

console.log(calculeteRide([
  { distance: 10, ds: new Date("2021-03-01T10:00:00") }
]));
console.log(calculeteRide([
  { distance: 10, ds: new Date("2021-03-02T10:00:00") }
]));
console.log(calculeteRide([
  { distance: 10, ds: new Date("2021-03-02T23:00:00") }
]));
console.log(calculeteRide([
  { distance: 10, ds: new Date("2021-03-07T10:00:00") }
]));
console.log(calculeteRide([
  { distance: 10, ds: new Date("2021-03-07T23:00:00") }
]));
console.log(calculeteRide([
  { distance: -10, ds: new Date("2021-03-01T10:00:00") }
]));
console.log(calculeteRide([
  { distance: 10, ds: new Date("abcdef") }
]));
console.log(calculeteRide([
  { distance: 3, ds: new Date("2021-03-01T10:00:00") }
]));