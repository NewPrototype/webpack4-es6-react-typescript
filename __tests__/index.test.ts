
import {sum,isEmpty} from './../src/util/index'

describe('util index.js',()=>{
  it('sum 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('isEmpty {a:1}',()=>{
    expect(isEmpty({a:1})).toBeFalsy()
  })
  it('isEmpty {}',()=>{
    expect(isEmpty({})).toBeTruthy()
  })
  it('isEmpty []',()=>{
    expect(isEmpty([])).toBeTruthy()
  })
  it('isEmpty null',()=>{
    expect(isEmpty(null)).toBeTruthy()
  })
  it('isEmpty',()=>{
    expect(isEmpty(undefined)).toBeTruthy();
  })
})
