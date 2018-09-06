import { rejects } from "assert";

export const sum = (a: number, b: number): number => {
  return a + b
}


export const isEmpty = (value: object): boolean => {
  if (value == null) {
    return true;
  }
  if (typeof value == 'object') {
    if (value instanceof Array) {
      // 数组
      return !value.length;
    } else {
      // 对象
      for (var key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
          return false;
        }
      }
    }
  }
  return true;
}



export let myAdd: (baseValue: number, increment: number) => number = function (x, y) { return x + y }



let a = (x: number, y: number): number => {
  return x + y
}

export let b = <T>(arg: T): T => {
  return arg
}


export const testCallBack = (callback: any) => {
  let a = 1, b = 2;
  callback(3)
}


export const testPromise = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(3)
    }, 300);
  })
}

export const testAsync = async () => {
  return await a(1, 2);
}


export const testForEach = (items: Number[], callback: Function) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}