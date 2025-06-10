'use client'

import {
  StreamVideo,
  StreamVideoClient,
  User
} from "@stream-io/video-react-sdk";
import { useState, ReactNode } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const user: User = {id: '1', name: 'mccray'};

const StreamVideoProvider = ({children}: {children: ReactNode}) => {

  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const client = new StreamVideoClient({apiKey, user, });


  return (
    <StreamVideo client={videoClient}>

    </StreamVideo>
  );
};

export default StreamVideoProvider;