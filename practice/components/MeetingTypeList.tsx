/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { BsPlusLg } from "react-icons/bs";
import FunctionCard from "./FunctionCard";
import { useState } from "react";
import { useRouter } from "next/router";

const MeetingTypeList = () => {

  const router = useRouter();
  
  const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-col-4">
      <FunctionCard cardText={'New Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isInstantMeeting')} className="bg-orange-600"/>
      <FunctionCard cardText={'Schedule Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isScheduleMeeting')} className="bg-blue-600"/>
      <FunctionCard cardText={'View Recordings'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} className="bg-purple-600"/>
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />} handleClick={() => router.push('/recordings')} className="bg-yellow-600"/>
    </section>
  )
}
export default MeetingTypeList;