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



export let myAdd:(baseValue:number,increment:number)=>number=function (x,y){return x+y}



let a=(x:number,y:number):number=>{
  return x+y
}

export let b=<T>(arg:T):T=>{
  return arg
}
