
/**基础类型 */
let isDone:boolean=false;

let decLiteral:number=123;

let name:string='bob';

let list:number[]=[1,2,3,4]
let list2:Array<number>=[12,3,45,]
let list3:any[]=[1,2,false];
let list4:Array<any>=[12,'str']

let arr:[string,number]

arr=['hello',123]
arr[3]=1;

//枚举 如果没有默认值获取的下标
enum Color {Red,Green=3,Blue}  
//可以设置默认值

let c:string=Color[3];
console.log(c,'--')

let notSure:any=4;
notSure='hi';

let prettySure:object={};


function warnUser():string{
  return 'hi'
}
/**
 *
 *void表示没有任何返回值
 */
function number():void{
  console.log('---12')
}

/**
 *never类型表示的是那些永不存在的值的类型
 *
 * @returns {never}
 */
function error():never{
  throw new Error('错误')
}

//断言 程序员自己来检测

let someValue:string='this is a string';
let strLength =(<string>someValue).length;
let strLength1 =(someValue as string).length;

export default isDone

