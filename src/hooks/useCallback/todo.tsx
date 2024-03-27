import { useState } from 'react'
import { useCallback } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    text: 'clean room',
    completed: false,
  },
  {
    id: 2,
    text: 'wash dishes',
    completed: false,
  },
  {
    id: 3,
    text: 'play games',
    completed: true,
  }
]

export default function TodoComponent() {

  const [todoList, setTodoList] = useState<Todo[]>(todos);

  // const addTodo = useCallback((text: string) => {
  //   setTodoList([...todoList, {
  //     id: Date.now() + 1,
  //     text: text,
  //     completed: false
  //   }])
  // }, [todoList]);

  const removeTodo = useCallback((id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }, [todoList])

  return (
    <>
      <div>
        <div style={{ textAlign: 'center', fontSize: '1.5rem', display: 'grid', placeItems: 'center' }}>Todo Componenet</div>

        {/* <div style={{ margin: '1rem auto', justifySelf: 'center', display: 'grid', justifyContent: 'center' }}>
          <form style={{display: 'flex', gap: '10px'}}>
            <input type="text" onChange={(e) => {
              addTodo(e.target.value);
            }} />
            <button type="submit">Add Todo</button>
          </form>
        </div> */}

        {todoList.map((todo) => (
          <>
            <div key={todo?.id}>
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', margin: '1rem auto' }}>
                <div>
                  {todo?.text}
                </div>
                <div style={{ padding: '8px 15px', fontWeight: 700, color: 'tomato', fontSize: '10px', background: 'pineapple' }}>
                  {todo?.completed ? 'completed' : 'not completed'}
                </div>
                {/* <div onClick={removeTodo(todo?.id)} style={{fontSize: 10, padding: 10, background: 'red', color: '#fff', borderRadius: '99999px'}}> */}
                  X
                {/* </div> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}