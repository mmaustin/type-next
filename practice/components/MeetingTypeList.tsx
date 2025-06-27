// /* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { BsPlusLg } from "react-icons/bs";
import FunctionCard from "./FunctionCard";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SiImagedotsc } from "react-icons/si";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from 'react-datepicker'

// import globe from '../public/globe.svg';
// import verce from '../public/vercel.svg';

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
    if (!client) return;

    try {
      if (!values.dateTime) {
        toast.info('Please select a date and time');
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error('Failed to create call');

      const startedAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data: {
          starts_at: startedAt,
          custom: {
            description
          }
        }
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      };

      toast.success('Meeting Created')

    } catch (error) {
      console.log(error);
      toast.error('Meeting was not created.')
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <FunctionCard cardText={'New Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isInstantMeeting')} classname="bg-orange-600" />
      <FunctionCard cardText={'Schedule Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isScheduleMeeting')} classname="bg-blue-600" />
      <FunctionCard cardText={'View Recordings'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} classname="bg-purple-600" />
      <FunctionCard cardText={'Join Meeting'} icon={<BsPlusLg />} handleClick={() => setMeetingState('isJoiningMeeting')} classname="bg-yellow-600" />

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
        <div className="flex flex-col gap-2 5">
          <label htmlFor="description" className="text-base text-normal leading-[22px] text-sky-2">
            Add A Description
          </label>
          <Textarea id="description" className="border-none bg-slate-900 focus-visible:ring-0 focus-visible:ring-offset-0" onChange={e => {
            setValues({...values, description: e.target.value})
          }}/>
        </div>
        <div className="flex w-full flex-col gap-2 5">
          <label className="text-base text-normal leading[22px] text-sky-2 uppercase">
            select date and time
          </label>
          <ReactDatePicker
            selected={values.dateTime}
            onChange={(date) => {
              setValues({...values, dateTime: date!})
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full rounded bg-slate-900"
          />
        </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Meeting Created'
          classname='text-center'
          handleClick={() => {
            // navigator.clipboard.writeText(meetingLink);
            // toast({title: 'Link Copied'})
          }}
          image={<SiImagedotsc />}
          buttonIcon={<SiImagedotsc/>}
          buttonText='Schedule Meeting'  
        />
      )}

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