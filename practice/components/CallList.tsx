/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useGetCall } from "@/hooks/useGetCalls";

type CallListProps = {
  type: "upcoming" | "recordings" | "ended"
}

const CallList = ({type } : CallListProps) => {
  return (
    <div>CallList</div>
  )
}
export default CallList;