import { useState, memo, useCallback } from 'react';
import styled from 'styled-components';

import { todoDelate, todoUpdate } from '../../apis/todo';

const SBtnBox = styled.div`
  display: flex;
`;
const SLayout = styled.div`
  display: flex;
`;
const STodoInput = styled.input`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : '')};
`;

function TodoItem({ data, isCompleted, setIsdataChange, id }) {
  const [todoValue, setTodoValue] = useState(data);
  const [isChange, setIschange] = useState(false);
  const [completeBtn, setCompleteBtn] = useState(isCompleted);

  const handleInput = useCallback(e => {
    setTodoValue(e.target.value);
  }, []);

  const handleChange = useCallback(() => {
    setIschange(true);
  }, []);

  const handleCancle = useCallback(() => {
    setIschange(false);
    setTodoValue(data);
  }, [data]);

  const handleComplate = useCallback(() => {
    setCompleteBtn(prev => !prev);
  }, []);

  const handleDeleate = useCallback(
    async e => {
      e.preventDefault();
      const token = localStorage.getItem('login');
      const todoDelateResult = await todoDelate(id, token);
      if (todoDelateResult) {
        setIsdataChange(prev => !prev);
      }
    },
    [id, setIsdataChange],
  );

  const handleUpdate = useCallback(async () => {
    setIschange(false);

    if (data !== todoValue || isCompleted !== completeBtn) {
      let token = localStorage.getItem('login');
      const data = { todo: todoValue, isCompleted: completeBtn };
      const todoUpdateResult = todoUpdate(token, data, id);

      if (todoUpdateResult) setIsdataChange(prev => !prev);
    }
  }, [completeBtn, data, id, isCompleted, setIsdataChange, todoValue]);

  return (
    <SLayout>
      <STodoInput
        type="text"
        value={todoValue}
        isCompleted={completeBtn}
        onChange={handleInput}
        disabled={!isChange}
      />

      <SBtnBox>
        {!isChange && <div onClick={handleChange}>수정</div>}
        {!isChange && <div onClick={handleDeleate}>삭제</div>}

        {isChange && <div onClick={handleComplate}>완료</div>}
        {isChange && <div onClick={handleUpdate}>저장</div>}
        {isChange && <div onClick={handleCancle}>취소</div>}
      </SBtnBox>
    </SLayout>
  );
}

export default memo(TodoItem);
