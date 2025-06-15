'use client';

import { use } from "react";
import { User } from "@stream-io/video-react-sdk";

const Meeting = ({params}: {params: Promise<string>}) => {

  const user: User = {id: '1', name: 'mccray'};
  console.log(user);
  
   
  const paramId = use(params)
  const id = Object.values(paramId)[0];
  
  return (
    <div className="text-zinc-50">Meeting Room #: {id} </div>
  )
}
export default Meeting;