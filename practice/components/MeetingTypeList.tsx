
'use client';

import { BsPlusLg } from "react-icons/bs";
import FunctionCard from "./FunctionCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {

  const router = useRouter();
  
  const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();
  console.log(meetingState)

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <FunctionCard cardText={'New Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isInstantMeeting')} classname="bg-orange-600"/>
      <FunctionCard cardText={'Schedule Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isScheduleMeeting')} classname="bg-blue-600"/>
      <FunctionCard cardText={'View Recordings'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} classname="bg-purple-600"/>
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />} handleClick={() => router.push('/recordings')} classname="bg-yellow-600"/>
    </section>
  )
}
export default MeetingTypeList;