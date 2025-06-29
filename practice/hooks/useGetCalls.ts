/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Call, useStreamVideoClient, User } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCall = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const client = useStreamVideoClient();
  const user: User = { id: '1', name: 'mccray' };

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?.id) return;
      setIsLoading(true);

      try {

        const { calls } = await client.queryCalls({
          sort: [{field: 'starts_at', direction: -1}],
          filter_conditions: {
            starts_at: { $exists: true},
            $or: [
              {created_by_user_id: user.id},
              {members: {$in: [user.id]}},
            ]
          }
        });
        setCalls(calls);
      } catch (error) {
        console.log(error);

      } finally {
        setIsLoading(false);
      }
    };
    loadCalls();
  }, [client, user?.id])
};
