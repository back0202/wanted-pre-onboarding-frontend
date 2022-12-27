import { useRef, memo, useCallback } from 'react';
import { todoCreate } from '../../apis/todo';

function TodoInput({ setIsdataChange }) {
  const inputRef = useRef('');

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const token = localStorage.getItem('login');
      const todo = inputRef.current.value;
      const data = { todo: todo };
      const todoCreateResult = await todoCreate(token, data);
      if (todoCreateResult) {
        setIsdataChange(prev => !prev);
        inputRef.current.value = '';
      }
    },
    [setIsdataChange],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <input type="submit" value="추가" />
      </form>
    </div>
  );
}
export default memo(TodoInput);
