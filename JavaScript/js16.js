const sum = require('./index').sum
const milesToKm = require('./index').milesToKm
const saleCalculator = require('./index').saleCalculator

test('add positive numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 5)).toBe(6);
});

test('adds 1 + (-1) to equal 0', () => {
  expect(sum(1, -1)).toBe(0);
});

test('Test positive mile amounts', () => {
	expect(milesToKm(4)).toBe(6.44);
	expect(milesToKm(1)).toBe(1.61);
	expect(milesToKm(100000)).toBe(160934);
	expect(milesToKm(0)).toBe(0);
});

test('Test negative mile amounts', () => {
	expect(milesToKm(-4)).toBe(undefined);
	expect(milesToKm(-1)).toBe(undefined);
});

test('Test saleCalculator', () => {
	expect(saleCalculator(100, 10)).toBe(90);
	expect(saleCalculator(123, 12)).toBe(108.24);
});

test('Test out of bounds saleCalculator', () => {
	expect(saleCalculator(13, 101)).toBe(undefined);
	expect(saleCalculator(0, -1)).toBe(undefined);
	expect(saleCalculator(-1, 12)).toBe(undefined);
});
