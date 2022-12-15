import axios from "axios";

const getToken = async (Body, auth) => {
  return await axios.post(
    `${process.env.REACT_APP_DB_PORT}/auth/${auth}`,
    Body
  );
};

export const authApi = async (Body, auth) => {
  try {
    const token = await getToken(Body, auth);

    if (auth === "signup") alert("회원가입 성공");
    localStorage.clear();
    localStorage.setItem("login", token.data.access_token);
  } catch (e) {
    auth === "signin" ? alert("로그인 실패") : alert("회원가입 실패");
  }
};
