import { testCallBack ,testPromise,testAsync} from './../src/util/index';

describe('测试', () => {
  it('测试回调函数',(done)=>{
    function callback(data) {
      expect(data).toBe(3)
      done();
    }
  testCallBack(callback)
  })
  it('测试promise',()=>{
     testPromise().then(data=>{
      expect(data).toBe(3)
    })
  })

  it('测试async',async ()=>{
    const data=await testAsync();
    expect(data).toBe(3)
  })
    
})


