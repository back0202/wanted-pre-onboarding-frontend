import { useEffect, useState, memo } from "react";
import { todoGet } from "../../apis/todo";
import TodoItem from "./TodoItem";

function TodoItemList({ isDataChange, setIsdataChange }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const items = async () => {
      const token = localStorage.getItem("login");

      const todoGetResult = await todoGet(token);

      if (todoGetResult) {
        setTodoList(todoGetResult);
      }
    };
    items();
  }, [isDataChange]);

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            data={todo.todo}
            isCompleted={todo.isCompleted}
            setIsdataChange={setIsdataChange}
            id={todo.id}
          />
        );
      })}
    </div>
  );
}

export default memo(TodoItemList);
