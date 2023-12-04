    import {createSlice} from '@reduxjs/toolkit';
    import type {PayloadAction} from '@reduxjs/toolkit';

    export interface CounterState{
        value: number;
    }

    const initialState: CounterState = {
        value: 0,
    }

    // Reducer functions

    export const counterSlice = createSlice({
        name: 'counterSlice',
        initialState,
        reducers:{
            increment:(state)=>{
                state.value += 1;
            },
            decrement:(state)=>{
                state.value -= 1;
            },
            resetValue:(state)=>{
                state.value = 0;
            },
            incrementByAmount:(state,action:PayloadAction<number>)=>{
                state.value += action.payload
            }

        }
    })

    //Action creators are created for each case of reducer function

    export const {increment,decrement,incrementByAmount,resetValue} = counterSlice.actions

    export default counterSlice.reducer