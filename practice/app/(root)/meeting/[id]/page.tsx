/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { StreamCall, User, StreamTheme } from "@stream-io/video-react-sdk";
import { use, useState } from "react";

const Meeting = ({params}: {params: Promise<{id: string}>}) => {

  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);

  const user: User = {id: '1', name: 'mccray'};
  
  const paramId = use(params)
  const {id} = paramId;
  
  return (
    <StreamCall>
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