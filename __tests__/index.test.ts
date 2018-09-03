
import { sum, isEmpty } from './../src/util/index'

expect.extend({
  empty(received, argument){
    console.log(received,argument)
    const pass = (received % argument == 0);
    if (pass) {
      return {
        message: () => (
          `expected ${received} not to be divisible by ${argument}`
        ),
        pass: false,
      };
    } else {
      return {
        message: () => (`expected ${received} to be divisible by ${argument}`),
        pass: false,
      };
    }
  },
})
expect.extend({
    /**
   *
   *
   * @param {原数据对象} received
   * @param {输出对象} argument
   * @returns
   */
  toBeDivisibleBy(received, argument) {
    const pass = (received % argument == 0);
    if (pass) {
      return {
        message: () => (
          `expected ${received} not to be divisible by ${argument}，没有余数`
        ),
        pass: true,
      };
    } else {
      return {
        message: () => (`expected ${received} to be divisible by ${argument},有余数，错误`),
        pass: false,
      };
    }
  },
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
  { a: 1 }
];


describe('util index.js', () => {
  it('sum 1 + 2 to equal 3', () => {
    // console.log(expect)
    expect(sum(1, 2)).toBe(3);
  });
  it('isEmpty {a:1}', () => {
    expect(isEmpty({ a: 1 })).toBeFalsy()
  })
  it('isEmpty {}', () => {
    expect(isEmpty({})).toBeTruthy()
  })
  it('isEmpty []', () => {
    expect(isEmpty([])).toBeTruthy()
  })
  it('isEmpty null', () => {
    expect(isEmpty(null)).toBeTruthy()
  })
  it('isEmpty', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  })
  it('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });
  // test('the shopping list has toEqual on it', () => {
  //   expect(shoppingList).toEqual({ a: 1 });
  // });
  test('even and odd numbers', () => {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
  })
})


