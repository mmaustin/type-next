'use client';

import { use } from "react";
//import { User } from "@stream-io/video-react-sdk";

const Meeting = ({params}: {params: Promise<{id: string}>}) => {

  //const user: User = {id: '1', name: 'mccray'};
  
  const paramId = use(params)
  const {id} = paramId;
  
  return (
    <div className="text-zinc-50">Meeting Room #: {id} </div>
  )
}
export default Meeting;