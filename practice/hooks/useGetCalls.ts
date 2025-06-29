/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Call, useStreamVideoClient, User } from "@stream-io/video-react-sdk";
import { useState } from "react";

export const useGetCall = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const client = useStreamVideoClient();
  const user: User = {id: '1', name: 'mccray'};
};
