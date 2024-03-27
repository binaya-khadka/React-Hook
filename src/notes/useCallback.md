---
title: 'React Hooks'
date: 'Feb 26 2024'
description: 'Overview of someof the important react hooks'
---


# React Hooks


## useCallback

`useCallback` is a React Hook which lets' you cache a function definition between re-renders.

```js
const fn = useCallback(callBackFn, dependencies);
``

`useCallback` gets called whenever the dependencies are changed else the same function will be called.
You might think it's like normal thing but when you have are not changing a data or component the components are getting rendered and calling over and over again which is not a agood optimization technique.

```jsx
import { useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <div>
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

export default App
```

Simple example where we have used `useCallback` hook from react.
First of all we will call the `useCallback` hook. We have a state of count where it's initial value is 0 and we have two functional component 
`increment` and `decrement` which are both rendering `useCallback()` funnction so when it is called it will increase and decrease respectively.

  