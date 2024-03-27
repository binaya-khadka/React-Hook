import { useCallback, useState } from 'react'
import * as styles from './styles/count.styles'

export default function Count() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <div style={styles.container}>
        <div>
          {count}
        </div>
        <div>
          <button onClick={increment}>
            Increment
          </button>
          <button onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

