'use client'

import { tokenProvider } from "@/serverActions/server.actions";
import {
  StreamVideo,
  StreamVideoClient,
  User
} from "@stream-io/video-react-sdk";
import { useState, ReactNode } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const user: User = {id: '1'};

const StreamVideoProvider = ({children}: {children: ReactNode}) => {

  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  let client;
  if(apiKey){
    client = new StreamVideoClient({apiKey, tokenProvider, user});
  } else {
    return <p>No API Key</p>
  }
  
  console.log(client);
  
  return (
    <StreamVideo client={videoClient}>

    </StreamVideo>
  );
};

export default StreamVideoProvider;