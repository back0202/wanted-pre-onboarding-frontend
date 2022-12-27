import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/home/Form';

const signUp = '회원가입';
const signIn = '로그인';

function Home() {
  const [tab, setTab] = useState(signUp);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(signIn);
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  const handleTab = () => {
    setTab(prev => (prev === signIn ? signUp : signIn));
  };

  return (
    <div>
      <h1>{tab}</h1>
      <Form tab={tab} />

      <button onClick={handleTab} type="button">
        {tab === signIn ? signUp : signIn}
      </button>
    </div>
  );
}

export default Home;
