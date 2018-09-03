
import { sum, isEmpty } from './../src/util/index'



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
  // test('even and odd numbers111', () => {
  //   expect(101).not.toBeDivisibleBy(2);
  // })
})


