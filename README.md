#### webpack4-es6-react-typescript

#### 前言
typescript 逐渐出现在大家的项目中，作为前端的一员，typescript还是必须掌握的知识
jest 一个好的项目应该是存在大量测试代码，晋级必须要掌握的知识

#### 安装依赖
```cnpm install  || npm install```

#### 启动测试
- ```npm run jest```   单次运行
- ```npm run watch```  检测运行
- ```npm run reset```  快照覆盖
#### 启动项目
- ```npm run start```  启动项目
- ```npm run build ``` 打包


### 目录结构

```
.
├── dist  --------------------- 打包文件
├── webpack.config  --------------------- webpack相关配置
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── tsconfig.json  ------------------------ typescript配置
├── jest.config.js  ------------------------ jest配置
├── .babelrc  ------------------------ babel 配置
├── __mocks__  ------------------------ 测试辅助文件
├── __tests__  ------------------------ 测试文件
└── src  ------------------------------ 源码目录
    ├── axios  ------------------- 接口
    ├── components  ------------------- 业务模块集合目录
    ├── config  ------------------- 配置参数
    ├── lib  ----------------------- 
        └── img  --------------------- img
        └── less  --------------------- less文件
    └── pages  ------------------------ 页面集合目录
        └── home  --------------------- Home
            ├── Home.js  ------------- 页面入口文件
            └── Home.less  -------- 页面样式
            └── index.js  -------- 页面样式
     ├── router  ------------------- 路由
     ├── store  ------------------- redux
        └── actions  --------------------- actions
        └── reducers  --------------------- reducers
        └── sagas  --------------------- sagas
        └── stores  --------------------- stores
     ├── util  ------------------- 辅助方法
     ├── App  ------------------- 入口组件
     ├── index  ------------------- 入口文件

```

#### jest 参数解析
- --watchAll 开启检测
- --cache   缓存
- -b  在第一个失败的测试套件后立即退出测试套件。
- --debug  打印有关您的Jest配置的调试信息。
- --errorOnDeprecated  调用已弃用的API会抛出有用的错误消息。有助于简化升级过程。
- --expand  使用此标志显示完整的差异和错误而不是补丁

#### TODO
- <del>typescript热更新 </del>
- <del>antd 按需加载</del>
- <del>jest 测试环境</del>

#### 友情项目

webpack4-es6-react
- 介绍：一个基于webpack4、es6、react、react-router4、axios技术的项目架构
- 地址：https://github.com/NewPrototype/webpack4-es6-react

webpack4-es6-react-typescript
- 介绍：一个基于jest、typescript、webpack4、es6、react、react-router4、axios技术的项目架构
- 地址：https://github.com/NewPrototype/webpack4-es6-react-typescript

template-cli
- 介绍：操作终端下载react和typescript模版
- 地址：https://github.com/NewPrototype/template-cli

template
- 介绍：react、typescript模版文件
- 地址：https://github.com/NewPrototype/template

electron-web
- 介绍：electron前端项目
- 地址：https://github.com/NewPrototype/electron-web

electron-node
- 介绍：electron node服务器
- 地址：https://github.com/NewPrototype/electron-server
