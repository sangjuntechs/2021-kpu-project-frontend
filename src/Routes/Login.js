import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import styled from "styled-components";
import { IoChatbubbleSharp } from "react-icons/io5";
import Axios from "axios";
import Modal from "react-modal";
import ProdUpload from "../components/ProdUpload";

const AllConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  margin:10px;
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
  top: 0;
  width: 100vw;
  height: 6rem;
  background-color: rgba(250, 250, 250, 0.1);
  z-index: 10;
  backdrop-filter: blur(1.5px);
`;

const ProfileNameBox = styled.div`
  display:flex;
  flex-direction: column;
  font-size: 12px;
`

const ModalCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top:0px;
  margin: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #e7e7e7; /* Green */
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin:10px;
  font-weight:600;
  border-radius:5px;
  cursor:pointer;
  :hover {
    opacity: 0.7;
  }
`

const ProdButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin:10px;
  font-weight:600;
  border-radius:5px;
  margin-right:0;
  cursor:pointer;
  :hover {
    opacity: 0.7;
  }
`

const Highlight = styled.p`
  font-weight: 600;
  background-color: yellow;
  display:inline;
  font-size: 14px;
`

const Login = () => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };
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
        if (
          res.kakao_account.email === "devjun0421@gmail.com" ||
          res.kakao_account.email === "smg0403@naver.com"
        ) {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
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

            Axios.post("http://3.34.72.172/register", {
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
            {admin ? <ProdButton onClick={modalOpen}>제품 등록</ProdButton> : ""}
            <Button onClick={KakaoLogout}>로그아웃</Button>
            <ProfileNameBox>
            <p><Highlight>{userName}</Highlight>님 반갑습니다.</p>
            <p>{admin ? "다향의 관리자입니다." : ""}</p>
            </ProfileNameBox>
            <ProfileImg src={userImage} alt="유저 얼굴" />
          </ProfileBox>
          
          <HomePage />
          <Modal isOpen={openModal} overlayClassName="Overlay" ariaHideApp={false}>
          <ModalCloseBtn onClick={modalClose}>❌</ModalCloseBtn>
            <ProdUpload />
          </Modal>
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
