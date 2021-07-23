import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import styled from "styled-components";
import { IoChatbubbleSharp } from "react-icons/io5";
import Axios from "axios";


const AllConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const LoginImg = styled.img`
  border-radius: 30px;
  margin-right: 20px;
  height: 60vh;
  box-shadow: 2px 4px 8px gray;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 30vw;
  height: 60vh;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 2px 4px 8px darkgray;
  background-color: white;
`;

const KakaoButton = styled.button`
  all: unset;
  text-align: center;
  width: 150px;
  height: 50px;
  cursor: pointer;
  background-color: #f7e600;
  color: #53261f;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 130px;
  :hover {
    transform: translateY(-2px);
    box-shadow: 2px 4px 8px darkgray;
  }
  transition: 0.5s;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  margin-top: 100px;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 14px;
  margin-top: 15px;
`;

const ProfileBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top:0;
  width:100vw;
  height:70px;
  background-color: rgba(255,255,255,0.8);
`

const Login = () => {
  const [token, setToken] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userImage, setUserImage] = useState([]);

  useEffect(() => {
    if (!window.Kakao.Auth.getAccessToken()) {
      setToken(null);
    }
    if (window.Kakao.Auth.getAccessToken()) {
      setToken(window.Kakao.Auth.getAccessToken());
    }
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        setToken(window.Kakao.Auth.getAccessToken());
        setUserName(res.kakao_account.profile.nickname);
        setUserImage(res.kakao_account.profile.profile_image_url);
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const KakaoLogin = () => {
    window.Kakao.Auth.login({
      scope:
        "profile_nickname, profile_image, account_email, gender,age_range,birthday",
      success: function (authObj) {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            setToken(window.Kakao.Auth.getAccessToken());
            const AGE_RANGE = res.kakao_account.age_range;
            const BIRTHDAY = res.kakao_account.birthday;
            const EMAIL = res.kakao_account.email;
            const NICK_NAME = res.kakao_account.profile.nickname;
            const GENDER = res.kakao_account.gender;

            Axios.post("http://3.35.238.45/register", {
              nickname: NICK_NAME,
              age_range: AGE_RANGE,
              birth: BIRTHDAY,
              email: EMAIL,
              gender: GENDER,
            }).then(console.log("success userinfo save db.."));
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
          console.log(error, "뭐임?");
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
        <ProfileBox>
          <button onClick={KakaoLogout}>로그아웃</button>
          {userName}
          <ProfileImg src={userImage} alt="유저 얼굴" />
        </ProfileBox>
        <HomePage />
        </>
      ) : (
        <AllConatiner>
          <LoginImg
            src="https://cdn.spotaineco.com/news/photo/202008/1278_723_1053.jpg"
            alt="향수"
          />
          <LoginContainer>
            <TextBox>
              <TitleText>안녕하세요 다향입니다.</TitleText>
              <Text>
                저희는 향을 사랑하는 사람들끼리 향의 정보를 공유하고 주성분을
                찾는 서비스를 합니다. 서비스 사용을 위해 카카오로 로그인을
                해주시면 감사하겠습니다.
              </Text>
              <Text>편의성을 위해 다향은 카카오 간편 로그인만 가능합니다.</Text>
            </TextBox>
            <KakaoButton onClick={KakaoLogin}>
              <IoChatbubbleSharp fontSize="16px" /> 카카오로 로그인
            </KakaoButton>
          </LoginContainer>
        </AllConatiner>
      )}
    </>
  );
};

export default Login;
