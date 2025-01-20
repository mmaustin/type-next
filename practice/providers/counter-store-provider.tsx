/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { type ReactNode, createContext, useRef, useContext} from 'react';
import { useStore } from 'zustand';
import { type CounterStore, createCounterStore, initCounterStore} from '@/stores/counter-store';

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(undefined);

export interface CounterStoreProviderProps {
  children: ReactNode
};

export const CounterStoreProvider = ({children}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>(undefined);

  if(!storeRef.current){
    storeRef.current = createCounterStore(initCounterStore())
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

