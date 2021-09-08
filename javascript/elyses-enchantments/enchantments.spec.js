//@ts-check

import {
  getItem,
  setItem,
  insertItemAtTop,
  insertItemAtBottom,
  removeItem,
  removeItemFromTop,
  removeItemAtBottom,
  checkSizeOfStack,
} from './enchantments';

// @ts-ignore
describe('Elyses enchantments', () => {
  // @ts-ignore
  describe('pick a card', () => {
    // @ts-ignore
    test('get the first card', () => {
      const stack = [1, 2, 3];
      const expected = 1;

      // @ts-ignore
      expect(getItem(stack, 0)).toBe(expected);
    });

    // @ts-ignore
    test('get the middle card', () => {
      const stack = [4, 5, 6];
      const expected = 5;

      // @ts-ignore
      expect(getItem(stack, 1)).toBe(expected);
    });

    // @ts-ignore
    test('get the last card', () => {
      const stack = [9, 8, 7];
      const expected = 7;

      // @ts-ignore
      expect(getItem(stack, 2)).toBe(expected);
    });
  });

  // @ts-ignore
  describe('sleight of hand', () => {
    // @ts-ignore
    test('replace the first card with a 7', () => {
      const stack = [1, 2, 3];
      const position = 0;
      const replacement = 7;

      const expected = [7, 2, 3];
      // @ts-ignore
      expect(setItem(stack, position, replacement)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('replace the middle card with a 5', () => {
      const stack = [2, 2, 2];
      const position = 1;
      const replacement = 5;

      const expected = [2, 5, 2];
      // @ts-ignore
      expect(setItem(stack, position, replacement)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('replace the last card with a 7', () => {
      const stack = [7, 7, 6];
      const position = 2;
      const replacement = 7;

      const expected = [7, 7, 7];
      // @ts-ignore
      expect(setItem(stack, position, replacement)).toStrictEqual(expected);
    });
  });

  // @ts-ignore
  describe('make cards appear', () => {
    // @ts-ignore
    test('adding a second card at the top', () => {
      const stack = [1];
      const newCard = 5;

      const expected = [1, 5];
      // @ts-ignore
      expect(insertItemAtTop(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a third card at the top', () => {
      const stack = [1, 5];
      const newCard = 9;

      const expected = [1, 5, 9];
      // @ts-ignore
      expect(insertItemAtTop(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a fourth card at the top', () => {
      const stack = [1, 5, 9];
      const newCard = 2;

      const expected = [1, 5, 9, 2];
      // @ts-ignore
      expect(insertItemAtTop(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a different fourth card at the top', () => {
      const stack = [1, 5, 9];
      const newCard = 8;

      const expected = [1, 5, 9, 8];
      // @ts-ignore
      expect(insertItemAtTop(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding multiple cards to the stack at the top', () => {
      const stack = [1];

      insertItemAtTop(stack, 5);
      insertItemAtTop(stack, 9);

      const expected = [1, 5, 9];
      // @ts-ignore
      expect(stack).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a second card to the bottom', () => {
      const stack = [1];
      const newCard = 5;

      const expected = [5, 1];
      // @ts-ignore
      expect(insertItemAtBottom(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a third card to the bottom', () => {
      const stack = [5, 1];
      const newCard = 9;

      const expected = [9, 5, 1];
      // @ts-ignore
      expect(insertItemAtBottom(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a fourth card to the bottom', () => {
      const stack = [9, 5, 1];
      const newCard = 2;

      const expected = [2, 9, 5, 1];
      // @ts-ignore
      expect(insertItemAtBottom(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding a different fourth card to the bottom', () => {
      const stack = [9, 5, 1];
      const newCard = 8;

      const expected = [8, 9, 5, 1];
      // @ts-ignore
      expect(insertItemAtBottom(stack, newCard)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('adding multiple cards to the stack to the bottom', () => {
      const stack = [1];

      insertItemAtBottom(stack, 5);
      insertItemAtBottom(stack, 9);

      const expected = [9, 5, 1];
      // @ts-ignore
      expect(stack).toStrictEqual(expected);
    });
  });

  // @ts-ignore
  describe('make cards disappear', () => {
    // @ts-ignore
    test('remove the card at the bottom', () => {
      const stack = [1, 2, 3, 4];
      const position = 0;

      const expected = [2, 3, 4];

      if (stack[0] === undefined) {
        // eslint-disable-next-line no-undef
        // @ts-ignore
        fail(
          new Error(
            'The card has disappeared, but the stack has not changed in size. This magic trick has turned into actual magic. Perhaps a different method of removing the card will result in a stack that Elyse can work with...'
          )
        );
      }

      // @ts-ignore
      expect(removeItem(stack, position)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the card at the top', () => {
      const stack = [1, 2, 3, 4];
      const position = 3;

      const expected = [1, 2, 3];
      // @ts-ignore
      expect(removeItem(stack, position)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the second card', () => {
      const stack = [1, 2, 3, 4];
      const position = 1;

      const expected = [1, 3, 4];
      // @ts-ignore
      expect(removeItem(stack, position)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the middle two cards', () => {
      const stack = [1, 2, 3, 4];

      removeItem(stack, 1);
      removeItem(stack, 1);

      const expected = [1, 4];
      // @ts-ignore
      expect(expected).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the only card from the top', () => {
      const stack = [1];
      const expected = [];
      // @ts-ignore
      expect(removeItemFromTop(stack)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the card from the top', () => {
      const stack = [1, 2, 3];
      const expected = [1, 2];
      // @ts-ignore
      expect(removeItemFromTop(stack)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove two cards from the top', () => {
      const stack = [1, 2, 3];

      removeItemFromTop(stack);
      removeItemFromTop(stack);

      const expected = [1];
      // @ts-ignore
      expect(expected).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the only card from the bottom', () => {
      const stack = [1];
      const expected = [];
      // @ts-ignore
      expect(removeItemAtBottom(stack)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove the card from the bottom', () => {
      const stack = [1, 2, 3];
      const expected = [2, 3];
      // @ts-ignore
      expect(removeItemAtBottom(stack)).toStrictEqual(expected);
    });

    // @ts-ignore
    test('remove two cards from the bottom', () => {
      const stack = [1, 2, 3];

      removeItemFromTop(stack);
      removeItemFromTop(stack);

      const expected = [3];
      // @ts-ignore
      expect(expected).toStrictEqual(expected);
    });
  });

  // @ts-ignore
  describe('check your work', () => {
    // @ts-ignore
    describe('an empty stack of cards', () => {
      // @ts-ignore
      test('has 0 cards', () => {
        const stack = [];

        // @ts-ignore
        expect(checkSizeOfStack(stack, 0)).toBe(true);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 1)).toBe(false);
      });
    });

    // @ts-ignore
    describe('a stack with a single card', () => {
      // @ts-ignore
      test('has exactly 1 card', () => {
        const stack = [7];

        // @ts-ignore
        expect(checkSizeOfStack(stack, 0)).toBe(false);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 1)).toBe(true);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 2)).toBe(false);
      });
    });

    // @ts-ignore
    describe('a stack with the even cards', () => {
      // @ts-ignore
      test('has exactly 4 cards', () => {
        const stack = [2, 4, 6, 8];

        // @ts-ignore
        expect(checkSizeOfStack(stack, 3)).toBe(false);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 4)).toBe(true);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 5)).toBe(false);
      });
    });

    // @ts-ignore
    describe('a stack with the odd cards', () => {
      // @ts-ignore
      test('has exactly 5 cards', () => {
        const stack = [1, 3, 5, 7, 9];

        // @ts-ignore
        expect(checkSizeOfStack(stack, 3)).toBe(false);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 4)).toBe(false);
        // @ts-ignore
        expect(checkSizeOfStack(stack, 5)).toBe(true);
      });
    });
  });
});
