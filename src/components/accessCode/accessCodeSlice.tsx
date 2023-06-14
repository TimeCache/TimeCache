import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface AccessCodeState {
    value: string
  };
  
  const initialState: AccessCodeState = {
    value: "",
  };

export const codeSlice = createSlice({
    name: 'accessCode',
    initialState,
    reducers: {
        
    }
})