/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { type ReactNode, createElement, useRef, useContext} from 'react';
import { useStore } from 'zustand';
import { type CounterStore, createCounterStore, initCounterStore} from '@/stores/counter-store';

export type CounterStoreApi = ReturnType<typeof createCounterStore>;