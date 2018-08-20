
/**接口 interface */


function printLabel(labelObj:{label:string}){
  console.log(labelObj.label)
}

printLabel({label:'hi'})





interface LabelValue{
  label:string,
  value?:string //可选

}

function printLabelInter(labelItem:LabelValue):{label:string}{
  console.log(labelItem.label)
  return labelItem
}
printLabelInter({label:'hello'})


interface Point {
  readonly x:number;  //只读
}

let p:Point={x:10};
// p.x=1200 //只读



export default 'interface';