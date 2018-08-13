import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; };

export const Hello = (props: HelloProps) => (
  <h1>{props.framework} {props.compiler} </h1>
)