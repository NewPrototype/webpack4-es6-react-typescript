import * as React from 'react';

interface HelloProps { compiler: string; framework: string; };




class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName}${middleInitial}${lastName}`
  }
}


interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person):string {
  return `hello, ${person.firstName} ${person.lastName}`
}
let user = new Student('Jane', "M", "user");
console.log(greeter(user))

export const Hello = (props: HelloProps) => (
  <h1>{props.framework} {props.compiler} {greeter(user)}</h1>
)



