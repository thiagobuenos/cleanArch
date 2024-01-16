import FirstDayCalculatorHandler from "../../src/3/FirstDaySundayFareCalculatorHandler";
import NormalFareCalculatorHandler from "../../src/3/NormalFareCalculatorHandler";
import OvernightCalculatorHandler from "../../src/3/OvernightFareCalculatorHandler";
import OvernightSundayCalculatorHandler from "../../src/3/OvernightSundayFareCalculatorHandler";
import Ride from "../../src/3/Ride";
import SundayCalculatorHandler from "../../src/3/SundayFareCalculatorHandler";
let ride: Ride
beforeEach(function () {
  const normalFareCalculatorHandler = new NormalFareCalculatorHandler();
  const overnightCalculatorHandler = new OvernightCalculatorHandler(normalFareCalculatorHandler);
  const overnightSundayCalculatorHandler = new OvernightSundayCalculatorHandler(overnightCalculatorHandler);
  const sundayCalculatorHandler = new SundayCalculatorHandler(overnightSundayCalculatorHandler);
  const firstDayCalculatorHandler = new FirstDayCalculatorHandler(sundayCalculatorHandler);
  ride = new Ride(firstDayCalculatorHandler);
})

test("Deve calcular uma corrida no primeiro dia do mês", function () {
  ride.addSegment(10, new Date("2021-03-01T10:00:00"));
  expect(ride.calculateFare()).toBe(15);
});




