import { calculeteRide } from "../src/main";

test("Deve calcular uma corrida no primeiro dia do mês", function () {
  expect(calculeteRide([{ distance: 10, date: new Date("2021-03-01T10:00:00") }])).toBe(15);
});

test("Deve calcular uma corrida normal", function () {
  expect(calculeteRide([{ distance: 10, date: new Date("2021-03-02T10:00:00") }])).toBe(21);
});

test("Deve calcular uma corrida noturna", function () {
  expect(calculeteRide([{ distance: 10, date: new Date("2021-03-02T23:00:00") }])).toBe(39);
});

test("Deve calcular uma corrida diurna no domingo", function () {
  expect(calculeteRide([{ distance: 10, date: new Date("2021-03-07T10:00:00") }])).toBe(29);
});

test("Deve calcular uma corrida noturna no domingo", function () {
  expect(calculeteRide([{ distance: 10, date: new Date("2021-03-07T23:00:00") }])).toBe(50);
});

test("Não Deve calcular uma corrida com distancia negativa", function () {
  const segments = [{ distance: -10, date: new Date("2021-03-07T23:00:00") }];
  expect(() => calculeteRide(segments)).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular corrida com data invalida", function () {
  const segments = [{ distance: 10, date: new Date("abcdef") }];
  expect(() => calculeteRide(segments)).toThrow(new Error("Invalid date"));
});

test("Deve calcular uma corrida com valor minimo ", function () {
  expect(calculeteRide([{ distance: 3, date: new Date("2021-03-01T10:00:00") }])).toBe(10);
});


