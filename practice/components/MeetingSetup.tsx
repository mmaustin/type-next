'use client';

import { VideoPreview, useCall } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const MeetingSetup = () => {

  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);

  const call = useCall();

  useEffect(() => {
    if(isMicCamToggleOn){
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    };

  }, [isMicCamToggleOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">
        Setup
      </h1>
      <div className="w-[50%]">
        <VideoPreview/>
      </div>
      <div className="flex h-16 items-center justify-center gap-3">
        <label htmlFor="toggle" className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            id="toggle"
            checked={isMicCamToggleOn}
            onChange={e => setIsMicCamToggleOn(e.target.checked)}
          />
          Disable Camera and Microphone
        </label>
      </div>
      
    </div>
  )
}
export default MeetingSetup;