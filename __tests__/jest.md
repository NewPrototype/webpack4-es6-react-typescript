###运行命令
- jest   //单次运行
- jest --watch  //jest --watch  检测运行
- jest -u   //快照覆盖


#### 匹配
- toBe()精准匹配，等价于===
- not.toBe() 等价于 !== 
- toEqual() 对象匹配  
- toBeNull 只匹配null
- toBeUndefined 配对undefined 
- toBeTruthy 匹配 true
- toBefalsy 匹配 false 
- toMatch(/stop/) 匹配 字符串中包含stop
- toContain 数组包含选项 不能包含对象级别


- expect.extend  扩展判断方法
```
expect.extend({
    /**
   *
   *
   * @param {原数据对象} received
   * @param {输出对象} argument toBe('2') ==2
   * @returns {message:'错误日志',pass:false }
   */
  toBeDivisibleBy(received, argument) {
    const pass = (received % argument == 0);

    if (pass) {
      return {
        message: () => (
          `expected ${received} not to be divisible by ${argument}`
        ),
        pass: true,
      };
    } else {
      return {
        message: () => (`expected ${received} to be divisible by ${argument}`),
        pass: false,
      };
    }
  },
});
```