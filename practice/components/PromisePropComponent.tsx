"use client"

import { use } from "react";


const PromisePropComponent = ({proppy}: {proppy: Promise<string>}) => {
  const propData = use(proppy);
  const parsedPropData = JSON.parse(propData);
  console.log(parsedPropData.length);
  

  return (
    <div>PromisePropComponent</div>
  )
}
export default PromisePropComponent;