import React, { useState } from "react";
import HomePage from "../pages/Homepage";

const Login = () => {
  const [token, setToken] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userImage, setUserImage] = useState([]);

  const KakaoLogin = () => {
    window.Kakao.Auth.login({
      scope:
        "profile_nickname, profile_image, account_email, gender,age_range,birthday",
      success: function (authObj) {
        console.log(authObj, 'ㅋㅋ');
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            console.log(res, 'ㅋㅋ');
            setToken(window.Kakao.Auth.getAccessToken());
            setUserName(res.kakao_account.profile.nickname);
            setUserImage(res.kakao_account.profile.profile_image_url);
          },
        });
      },
    });
  };

  const KakaoLogout = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response) {
          console.log("로그아웃 되었습니다", response);
        },
        fail: function (error) {
          console.log(error);
        },
      });
      window.Kakao.Auth.setAccessToken(null);
      setToken(null);
    }
  };
  return (
    <>
      {token ? (
        <>
        <button onClick={KakaoLogout}>로그아웃 허실?</button>
        {userName}
        <img src={userImage} alt='유저 얼굴'/>
        <HomePage />
        </>
      ) : (
        <button onClick={KakaoLogin}>카카오로 로그인 허실?</button>
      )}
    </>
  );
};



export default Login;
