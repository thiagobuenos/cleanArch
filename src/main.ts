// @ts-nocheck
const NORMAL_FARE = 2.10;
const SUNDAY_FARE = 2.90;
const OVERNIGHT_FARE = 3.90;
const OVERNIGHT_SUNDAY_FARE = 5;
const FIRST_DAY_FARE = 1.5;
const MIN_FARE = 10;
const FIRST_DAY = 1;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;

function isOvernight(date) {
  return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END;
}

function isSunday(date) {
  return date.getDay() === 0;
}

function isValidDate(date) {
  return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}

function isValidDistance(distance) {
  return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}

export function calculeteRide(segments) {
  let fare = 0;
  for (const segment of segments) {
    if (!isValidDistance(segment.distance)) throw new Error("Invalid distance");
    if (!isValidDate(segment.date)) throw new Error("Invalid date");
    if (segment.date.getDate() === FIRST_DAY) {
      fare += segment.distance * FIRST_DAY_FARE;
      continue;
    }
    if (isOvernight(segment.date) && (!isSunday(segment.date))) {
      fare += segment.distance * OVERNIGHT_FARE;
      continue;
    }
    if (isOvernight(segment.date) && (isSunday(segment.date))) {
      fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
      continue;
    }
    if (!isOvernight(segment.date) && isSunday(segment.date)) {
      fare += segment.distance * SUNDAY_FARE;
      continue;
    }
    if (!isOvernight(segment.date) && (!isSunday(segment.date))) {
      fare += segment.distance * NORMAL_FARE;
    }
  }
  return (fare < MIN_FARE) ? MIN_FARE : fare;
}