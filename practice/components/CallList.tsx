/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useGetCall } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CallListProps = {
  type: "upcoming" | "recordings" | "ended"
}

const CallList = ({type } : CallListProps) => {

  const { endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCall();
  const router = useRouter();

  const [recordings, getRecordings] = useState<Call[]>([]);

  const getCalls = () => {
    switch(type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch(type) {
      case 'ended':
        return 'No Previous Calls';
      case 'recordings':
        return 'No Recordings';
      case 'upcoming':
        return 'No Upcoming Calls';
      default:
        return '';
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();
  
  return (
    <div className="grid gird-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (
        <p>a</p> : ()
      ))}
    </div>
  )
}
export default CallList;