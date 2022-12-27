import axios from 'axios';

const getToken = async (Body, auth) => {
  const result = await axios.post(
    `${process.env.REACT_APP_DB_PORT}/auth/${auth}`,
    Body,
  );
  return result;
};
const authApi = async (Body, auth) => {
  try {
    const token = await getToken(Body, auth);

    if (auth === 'signup') alert('회원가입 성공');
    localStorage.clear();
    localStorage.setItem('login', token.data.access_token);
  } catch (e) {
    auth === 'signin' ? alert('로그인 실패') : alert('회원가입 실패');
  }
};

export default authApi;
