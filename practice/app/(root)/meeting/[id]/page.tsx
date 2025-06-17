/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, User, StreamTheme } from "@stream-io/video-react-sdk";
import { use, useState } from "react";

const Meeting = ({params}: {params: Promise<{id: string}>}) => {
  const paramId = use(params)
  const {id} = paramId;
  

  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);

  const user: User = {id: '1', name: 'mccray'};
  
  const {call, isCallLoading} = useGetCallById(id);
  
  if(!user || isCallLoading) return <p>Something Rotten Is Going On!</p>
  
  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup />
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  )
}
export default Meeting;