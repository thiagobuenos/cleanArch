import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class FirstDayFareCalculator implements FareCalculator {
  FARE = 1.5;
  calculateFare(segment: Segment) {
    return segment.distance * this.FARE;
  }
}