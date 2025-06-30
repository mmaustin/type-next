/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useGetCall } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CallListProps = {
  type: "upcoming" | "recordings" | "ended"
}

const CallList = ({type } : CallListProps) => {

  const { endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCall();
  const router = useRouter();

  const [recordings, getRecordings] = useState<Call[]>([])

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
  }
  
  return (
    <div>CallList</div>
  )
}
export default CallList;