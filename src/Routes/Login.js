import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState([]);
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope:
        "profile_nickname, profile_image, account_email, gender,age_range,birthday	",
      success: function (authObj) {
        console.log(authObj.access_token);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            setUser(Object.values(res.kakao_account.profile));
            console.log(user);
          },
        });
      },
    });
  };
  return (
    <>
      {user[0] ? (
        <div>
          <p>{user[0]}</p>
          <img src={user[2]}/>
        </div>
      ) : (
        <button onClick={kakaoLogin}>로그인</button>
      )}
    </>
  );
};

export default Login;
