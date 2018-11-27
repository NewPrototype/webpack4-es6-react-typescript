
expect.extend({
  /**
 *
 *
 * @param {原数据对象} received
 * @param {输出对象} argument
 * @returns
 */
  toBeDivisibleBy(received: number, argument) {
    console.log(received, '-------');
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
test('even and odd numbers', () => {
  expect(100).toBeDivisibleBy(2);
  expect(101).not.toBeDivisibleBy(2);
})