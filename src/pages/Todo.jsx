import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import TodoItemList from "../components/todo/TodoItemList";
import TodoTitle from "../components/todo/TodoTitle";
import styled from "styled-components";

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Todo() {
  const [isDataChange, setIsdataChange] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("login");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <SLayout>
      <TodoTitle />
      <TodoInput setIsdataChange={setIsdataChange} />
      <TodoItemList
        isDataChange={isDataChange}
        setIsdataChange={setIsdataChange}
      />
    </SLayout>
  );
}

export default memo(Todo);
