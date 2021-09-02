// @ts-check

import { dayRate, monthRate, daysInBudget } from './freelancer-rates';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

// @ts-ignore
describe('freelancer rates', () => {
  // @ts-ignore
  describe('day rate', () => {
    // @ts-ignore
    test('at 16/hour', () => {
      const actual = dayRate(16);
      // @ts-ignore
      expect(actual).toBe(128);
    });

    // @ts-ignore
    test('at 25/hour', () => {
      const actual = dayRate(25);
      // @ts-ignore
      expect(actual).toBe(200);
    });

    // @ts-ignore
    test('at 31.40/hour', () => {
      const actual = dayRate(31.4);
      // @ts-ignore
      expect(actual).toBeCloseTo(251.2, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    // @ts-ignore
    test('at 89.89/hour', () => {
      const actual = dayRate(89.89);
      // @ts-ignore
      expect(actual).toBeCloseTo(719.12, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    // @ts-ignore
    test('at 97.654321/hour', () => {
      const actual = dayRate(97.654321);
      // @ts-ignore
      expect(actual).toBeCloseTo(781.234568, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });

  // @ts-ignore
  describe('month rate', () => {
    // @ts-ignore
    test('at 16/hour', () => {
      const actual = monthRate(16, 0);
      // @ts-ignore
      expect(actual).toBe(2816);
    });

    // @ts-ignore
    test('at 25/hour', () => {
      const actual = monthRate(25, 0);
      // @ts-ignore
      expect(actual).toBe(4400);
    });

    // @ts-ignore
    test('at 25/hour with a 50% discount', () => {
      const actual = monthRate(25, 0.5);
      // @ts-ignore
      expect(actual).toBe(2200);
    });

    // @ts-ignore
    test('at 25/hour with a 1.23% discount', () => {
      const actual = monthRate(25, 0.0123);
      // @ts-ignore
      expect(actual).toBe(4346);
    });

    // @ts-ignore
    test('at 31.40/hour with a 5% discount', () => {
      const actual = monthRate(31.4, 0.05);
      // @ts-ignore
      expect(actual).toBe(5251);
    });

    // @ts-ignore
    test('at 89.89/hour with a 5% discount', () => {
      const actual = monthRate(89.89, 0.05);
      // @ts-ignore
      expect(actual).toBe(15030);
    });

    // @ts-ignore
    test('at 89.89/hour with a 5% discount', () => {
      const actual = monthRate(89.89, 0.05);
      // @ts-ignore
      expect(actual).toBe(15030);
    });

    // @ts-ignore
    test('at 97.654321/hour with a 5% discount', () => {
      const actual = monthRate(97.654321, 0.05);
      // @ts-ignore
      expect(actual).toBe(16328);
    });
  });

  // @ts-ignore
  describe('days in budget', () => {
    // @ts-ignore
    describe('with a budget of 1280', () => {
      // @ts-ignore
      test('at 16/hour', () => {
        const actual = daysInBudget(1280, 16, 0);
        const expected = 10;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 25/hour', () => {
        const actual = daysInBudget(1280, 25, 0);
        const expected = 6;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 25/hour with 30% discount', () => {
        const actual = daysInBudget(1280, 25, 0.3);
        const expected = 9;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });

    // @ts-ignore
    describe('with a budget of 10.000', () => {
      // @ts-ignore
      test('at 25/hour with 5% discount', () => {
        const actual = daysInBudget(10000, 25, 0.05);
        const expected = 52;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 31.40/hour with 5% discount', () => {
        const actual = daysInBudget(10000, 31.4, 0.05);
        const expected = 41;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 89.89/hour with 5% discount', () => {
        const actual = daysInBudget(10000, 89.89, 0.05);
        const expected = 14;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 97.654321/hour with 5% discount', () => {
        const actual = daysInBudget(10000, 97.654321, 0.05);
        const expected = 13;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });
  });
});
