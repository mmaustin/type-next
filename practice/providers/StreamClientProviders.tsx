'use client'

import { tokenProvider } from "@/serverActions/server.actions";
import {
  StreamVideo,
  StreamVideoClient,
  User
} from "@stream-io/video-react-sdk";
import { useState, ReactNode, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const user: User = {id: '1', name: 'mccray'};


const StreamVideoProvider = ({children}: {children: ReactNode}) => {

  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if(!apiKey) throw new Error('API key is missing');
    const client = new StreamVideoClient({
      apiKey,
      user,
      tokenProvider
    });

    setVideoClient(client);

  },[]);
  
  if(!videoClient) return <p>Loading . . . </p>
  
  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;