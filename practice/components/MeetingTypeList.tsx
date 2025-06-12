/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { BsPlusLg } from "react-icons/bs";
import FunctionCard from "./FunctionCard";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {

  const router = useRouter();
  
  const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: ''
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const client = useStreamVideoClient();
  
  const createMeeting = async () => {
    if(!client) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      
      if(!call) throw new Error('Failed to create call');

      const startedAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data: {
          starts_at: startedAt,
          custom : {
            description
          }
        }
      });

      setCallDetails(call);

      if(!values.description){
        router.push(`/meeting/${call.id}`);
      };

    } catch (error) {
      console.log(error);
      
    }
    
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <FunctionCard cardText={'New Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isInstantMeeting')} classname="bg-orange-600"/>
      <FunctionCard cardText={'Schedule Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isScheduleMeeting')} classname="bg-blue-600"/>
      <FunctionCard cardText={'View Recordings'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} classname="bg-purple-600"/>
      <FunctionCard cardText={'Join Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} classname="bg-yellow-600"/>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title={'Start an Instant Meeting'}
        classname='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </section>
  )
}
export default MeetingTypeList;