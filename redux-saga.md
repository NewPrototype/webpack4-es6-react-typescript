### redux-saga

#### 名称解释
- take 阻塞
- fork 非阻塞
- call 阻塞
- put 阻塞
- all
- join 阻塞
- cancel 非阻塞
- takeEvery 非阻塞   并发处理 ，同一个action ，可以多次执行
- takeLatest 非阻塞  重新发起action是,会自动取消之前所有已经启动但仍在执行中的saga

