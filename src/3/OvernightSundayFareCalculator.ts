import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightSundayFareCalculator implements FareCalculator {
  FARE = 5;
  calculateFare(segment: Segment) {
    return segment.distance * this.FARE;
  }
}