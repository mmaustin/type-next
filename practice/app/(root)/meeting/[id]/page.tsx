/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, User, StreamTheme } from "@stream-io/video-react-sdk";
import { use, useState, useEffect } from "react";

const Meeting = ({params}: {params: Promise<{id: string}>}) => {
    const paramId = use(params)
    const {id} = paramId;

 
  // const [callId, setCallId] = useState<{id: string}>({id: '1'});
  // const {id} = callId;
  //console.log(id);
  

  // const unWrapParams = async (paramVariable: Promise<{id: string}>): Promise<{id: string}> => {
  //   return new Promise(resolve => resolve(paramVariable));
  // };
  
  // useEffect(() => {
  //   const getUnwrappedParams = async () => {
  //     const resolvedParams = await unWrapParams(params);
  //     setCallId(resolvedParams);
  //   };
  //   getUnwrappedParams();
  // }, [params])
  
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const user: User = {id: '1', name: 'mccray'};

  
  const {call, isCallLoading} = useGetCallById(id);
  
  if(!user || isCallLoading) return <p>Something Rotten Is Going On!</p>
  
  return (
    <StreamCall call={call}>
      <StreamTheme >
        {!isSetupComplete ? (
          <MeetingSetup isSetUpComplete={setIsSetupComplete}/>
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  )
}
export default Meeting;