'use server';

import { StreamClient } from '@stream-io/node-sdk'

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async() => {

  if(!apiKey) throw new Error('No API key');
  if(!apiSecret) throw new Error('No secret key');

  const client = new StreamClient(apiKey, apiSecret);
  
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  const vailidity = 60 * 60;
  
  const token = client.generateUserToken({user_id: '1', validity_in_seconds: vailidity, exp, issued });

  return token;

};