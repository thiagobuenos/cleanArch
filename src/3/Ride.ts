import FareCalculatorFactory from "./FareCalculatorFactory";
import NormalFareCalculator from "./NormalFareCalculator";
import Segment from "./Segment";


export default class Ride {
  MIN_FARE = 10;

  segments: Segment[];

  constructor() {
    this.segments = [];
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date, true));
  }

  calculateFare() {
    let fare = 0;
    for (const segment of this.segments) {
      const fareCalculator = FareCalculatorFactory.create(segment);
      fare += fareCalculator.calculateFare(segment);

    }
    return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
  }

}