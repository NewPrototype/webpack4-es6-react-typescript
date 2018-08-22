module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  notify:true, //消息通知
  "verbose": true, //指示是否应在运行期间报告每个单独的测试。执行后，所有错误仍将显示在底部。
  "bail":true,  //默认地，Jest 会运行所有的测试用例然后产出所有的错误到控制台中直至结束。bail 配置选项可以让 Jest 在遇到第一个失败后就停止继续运行测试用例。
  "collectCoverage":true,  //是否显示覆盖率
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "node"
  ],
  "moduleNameMapper":{   //一些不解析文件 导入到空
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  verbose:true, //指示是否应在运行期间报告每个单独的测试。执行后，所有错误仍将显示在底部。


}