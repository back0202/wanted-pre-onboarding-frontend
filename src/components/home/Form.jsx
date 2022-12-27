import { React, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authApi } from '../../apis/auth';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function Form({ tab }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);

  const navigate = useNavigate();

  const emailHandler = useCallback(e => {
    const emailRegex = /@/;
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (tab === '로그인') {
        const Body = { email, password };
        await authApi(Body, 'signin');
      } else {
        const Body = { email, password };
        await authApi(Body, 'signup');
      }

      if (localStorage.getItem('login')) navigate('/todo');
    },
    [email, navigate, password, tab],
  );

  const passwordHandler = useCallback(e => {
    const password = e.target.value;
    setPassword(password);
    if (password.length < 8) {
      setisPassword(false);
    } else {
      setisPassword(true);
    }
  }, []);

  return (
    <SForm onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={emailHandler} />
      {email.length > 0 && !isEmail && (
        <span>이메일 형식이 틀렸습니다. 다시 확인해주세요.</span>
      )}
      <label>Password</label>
      <input type="password" value={password} onChange={passwordHandler} />
      {password.length > 0 && !isPassword && (
        <span>비밀번호는 8자리 이상입니다.</span>
      )}
      <br />
      <input type="submit" disabled={!(isEmail && isPassword)} />
    </SForm>
  );
}

export default memo(Form);
