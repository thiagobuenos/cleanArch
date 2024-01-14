export default class Segment {
  FIRST_DAY = 1;
  OVERNIGHT_START = 22;
  OVERNIGHT_END = 6;

  constructor(readonly distance: number, readonly date: Date, readonly flag: boolean) {
    if (!this.isValidDistance(distance)) throw new Error("Invalid distance");
    if (!this.isValidDate()) throw new Error("Invalid date");
  }

  isOvernight() {
    return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
  }

  isSunday() {
    return this.date.getDay() === 0;
  }

  isValidDate() {
    return this.date != null && this.date != undefined && this.date instanceof Date && this.date.toString() !== "Invalid Date"
  }

  isValidDistance(distance: number) {
    return distance != null && distance != undefined && typeof distance === "number" && distance > 0
  }

  isFirstDay() {
    return this.date.getDate() === this.FIRST_DAY;
  }
}