import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const [isPassword, setisPassword] = useState(false);
  const onEmailHandler = (e) => {
    const emailRegex = /@/;
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };
  const onSubmit = () => {};
  const onPasswordHandler = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.length < 8) {
      setisPassword(false);
    } else {
      setisPassword(true);
    }
  };
  return (
    <div>
      <h1>로그인</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        {email.length > 0 && !isEmail && (
          <span>이메일 형식이 틀렸습니다. 다시 확인해주세요.</span>
        )}
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        {password.length > 0 && !isPassword && (
          <span>비밀번호는 8자리 이상입니다.</span>
        )}
        <br />
        <input type="submit" disabled={!(isEmail && isPassword)} />
      </form>
    </div>
  );
}

export default Home;
