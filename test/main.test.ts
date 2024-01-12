import { calc } from "../src/main";

test("Deve calcular uma corrida no primeiro dia do mês", () => {
  expect(calc([{ dist: 10, ds: new Date("2021-03-01T10:00:00") }])).toBe(15);
});

test("Deve calcular uma corrida normal", () => {
  expect(calc([{ dist: 10, ds: new Date("2021-03-02T10:00:00") }])).toBe(21);
});

test("Deve calcular uma corrida noturna", () => {
  expect(calc([{ dist: 10, ds: new Date("2021-03-02T23:00:00") }])).toBe(39);
});

test("Deve calcular uma corrida diurna no domingo", () => {
  expect(calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }])).toBe(29);
});

test("Deve calcular uma corrida noturna no domingo", () => {
  expect(calc([{ dist: 10, ds: new Date("2021-03-07T23:00:00") }])).toBe(50);
});

test("Não Deve calcular uma corrida com distancia negativa", () => {
  expect(calc([{ dist: -10, ds: new Date("2021-03-07T23:00:00") }])).toBe(-1);
});

test("Não deve calcular corrida com data invalida", () => {
  expect(calc([{ dist: 10, ds: new Date("abcdef") }])).toBe(-2);
});

test("Deve calcular uma corrida com valor minimo ", () => {
  expect(calc([{ dist: 3, ds: new Date("2021-03-01T10:00:00") }])).toBe(10);
});


