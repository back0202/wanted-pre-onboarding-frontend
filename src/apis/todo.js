import axios from "axios";

export const todoCreate = async (token, data) => {
  try {
    await axios.post(`${process.env.REACT_APP_DB_PORT}todos`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (e) {
    alert("todo생성 실패");
    return false;
  }
};

export const todoDelate = async (id, token) => {
  try {
    await axios.delete(`${process.env.REACT_APP_DB_PORT}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (e) {
    alert("todo삭제 실패");
    return false;
  }
};

export const todoUpdate = async (token, data, id) => {
  try {
    await axios.put(`${process.env.REACT_APP_DB_PORT}/todos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (e) {
    alert("todo업데이트 실패");
    return false;
  }
};

export const todoGet = async (token) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_DB_PORT}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("성공");
    return res.data;
  } catch (e) {
    alert("todo가져오기 실패");
    return [];
  }
};
