import { decrement, increment, selectCount, incrementByAmount } from '@/redux/reducers/counterSlice'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Counter.module.css'

export function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Increase by
        </button>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
      </div>
    </div>
  )
}
