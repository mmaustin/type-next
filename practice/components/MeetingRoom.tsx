/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { cn } from "@/lib/utils";
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { useState } from "react";

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {

  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showPartcipants, setShowParticipants] = useState<boolean>(true);

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition={"left"} />
      default:
        return <div className="h-[200px]"><SpeakerLayout participantsBarPosition={"right"} />
          </div> 
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[300px] items-center">
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2', {'block': showPartcipants} )}>
          <CallParticipantsList onClose={() => {
            setShowParticipants(false);
          }}/>
        </div>
      </div>
      <div className="bg-yellow-600 h-[200px] w-[200px] gap-2 border border-red-500">
        <CallControls />
      </div>
    </section>
  )
}
export default MeetingRoom;