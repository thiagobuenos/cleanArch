import Segment from "./Segment";

export default interface FareCalculator {
  calculateFare(segment: Segment): number;
}