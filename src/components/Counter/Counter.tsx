import React, { useState } from 'react';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount,resetValue } from '../../app/reducers/addCounterSlice';

function Counter() {
  // get data from the redux toolkit store using the useSelector
  const count = useSelector((state: RootState) => state.addCounter.value);

  const [amount, setAmount] = useState<number>(0); 
  const dispatch = useDispatch();

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    dispatch(incrementByAmount(amount))
    setAmount(0);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ marginRight: '1rem' }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button 
            onClick={() => dispatch(decrement())}
            style={{ marginRight: '1rem' }}
            >
          Decrement
        </button>
        <button onClick={() => dispatch(resetValue())}>
          Reset
        </button>
      </div>
      <div style={{marginTop:"1rem"}}>
        <form>
          <input
            aria-label='Enter the amount to increment the counter'
            type='number'
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(+e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type='submit'
            style={{ marginLeft: '1rem' }}
          >
            Increment By Amount
          </button>
        </form>
        </div>
    </div>
  );
}

export default Counter;
