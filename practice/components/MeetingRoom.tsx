'use client';

import { cn } from "@/lib/utils";
import { CallControls, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks, CallingState } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const { useCallCallingState} = useCallStateHooks();
  const callingState = useCallCallingState();

  
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showPartcipants, setShowParticipants] = useState<boolean>(true);
  
  if(callingState !== CallingState.JOINED) return <p>Loading . . . </p>

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
    <section className="relative h-screen w-full pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2', { 'block': showPartcipants })}>
          <CallParticipantsList onClose={() => {
            setShowParticipants(false);
          }} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls />

        <DropdownMenu>

          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg=[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                  setLayout(item.toLowerCase() as CallLayoutType)
                }}>
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border border-dark-1"/>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button className="" onClick={() => setShowParticipants(prev => !prev)}>
            <div className="cursor-pointer rounded-2xl bg=[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  )
}
export default MeetingRoom;