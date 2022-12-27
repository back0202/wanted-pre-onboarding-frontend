import { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/home/Form';

function Home() {
  const [tab, setTab] = useState('회원가입');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('login');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  const handleTab = useCallback(() => {
    setTab(prev => (prev === '로그인' ? '회원가입' : '로그인'));
  }, []);

  return (
    <div>
      <h1>{tab}</h1>
      <Form tab={tab} />

      <button onClick={handleTab} type="button">
        {tab === '로그인' ? '회원가입' : '로그인'}
      </button>
    </div>
  );
}

export default Home;
