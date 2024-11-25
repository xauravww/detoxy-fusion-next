'use client'


import {increment,decrement} from "../lib/store/slices/counterSlice"
import {RootState} from "../lib/store/store"
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter.value); // Get counter value from the Redux state
    
  return (
    <div className="flex justify-center items-center h-screen">
    <a href="/login"> Navigate to Login</a>
    <h1>Counter: {counter}</h1>
      <button className="bg-red-300 p-3 m-4" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-red-300 p-3 m-4" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
