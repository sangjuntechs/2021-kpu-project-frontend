import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import styled from "styled-components";
import { IoChatbubbleSharp } from "react-icons/io5";
import Axios from "axios";
import Modal from "react-modal";
import ProdUpload from "../components/ProdUpload";
import { Link } from "react-router-dom";

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
  width: 20rem;
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
  margin: 10px;
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
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const ModalCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
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
  margin: 10px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const ProdButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 10px;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const Highlight = styled.p`
  font-weight: 600;
  background-color: yellow;
  display: inline;
  font-size: 14px;
`;

const SearchBox = styled.input`
  all: unset;
  padding: 1rem;
  border-bottom: 2px solid black;
  position: absolute;
  left: 3rem;
  width: 12rem;
`;

const SearchProdContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:1rem;
  padding:2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 28rem;
  box-shadow: 2px 4px 12px gray;
  border-radius: 15px;
  margin-right: 3rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-1rem);
    background-color: rgba(0, 0, 0, 0.05);
    .font {
      opacity: 1;
      transform: translateY(2rem);
      transition: 0.7s;
      font-weight: 400;
    }
  }
`;

const ProductImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  margin: 3rem;
`;

const CardInContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 250, 250);
`;

const CardInContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardTextBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  text-align: center;
  padding: 1rem;
`;

const CardTextBox2 = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  height: 100%;
`;

const CardNameFont = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const SLevelLawFont = styled.p`
  font-size: 1rem;
  color: green;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SLevelMidFont = styled.p`
  font-size: 1rem;
  color: orange;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SLevelHighFont = styled.p`
  font-size: 1rem;
  color: red;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const LavelContainer = styled.div`
  display: flex;
`;

const AgeLavel = styled.p`
  padding: 0.4rem;
  margin: 0.4rem;
  font-size: 0.8rem;
  color: rgb(80, 80, 80);
  font-weight: 600;
`;

const LookFont = styled.p`
  opacity: 0;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  color: rgb(50, 50, 50);
  left: 10px;
`;

const HashTag = styled.p`
  color: dodgerblue;
  font-size: 0.8rem;
  display: inline-flex;
  margin-top: 0.5rem;
`;

const Login = () => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [userId, setUserId] = useState('');

  const modalOpen = () => {
    setOpenModal(true);
  };

  const filterPerfume = () => {
    const filterPerfumes = product.filter((perfumes) => {
      return (
        perfumes.ProductName.includes(search) ||
        perfumes.ProductF1.includes(search) ||
        perfumes.ProductF2.includes(search) ||
        perfumes.ProductF3.includes(search)
      );
    });
    setFilterProduct(filterPerfumes);
  };

  const searchModalOpen = (e) => {
    if (e.key === "Enter") {
      setOpenSearchModal(true);
      filterPerfume();
    }
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const searchModalClose = () => {
    setOpenSearchModal(false);
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "searchWord") {
      setSearch(value);
    }
  };

  useEffect(() => {
    Axios.get("http://3.34.59.69/Product").then((res) => {
      setProduct(res.data);
    });

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
        setUserId(res.id);
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
            const USER_ID = res.id;
            console.log(res, "res");

            Axios.post("http://3.34.59.69/Member", {
              id: USER_ID,
              nickname: NICK_NAME,
              age_range: AGE_RANGE,
              birth: BIRTHDAY,
              email: EMAIL,
              gender: GENDER,
            }).then(console.log("success userinfo save user db.."));
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
          console.log("???????????? ???????????????", response);
        },
        fail: function (error) {
          console.log(error, "???????");
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
            <SearchBox
              name="searchWord"
              type="text"
              placeholder="???????????? ????????? ????????? ?????? ??????!"
              onChange={onChange}
              onKeyPress={searchModalOpen}
            />
            {admin ? (
              <ProdButton onClick={modalOpen}>?????? ??????</ProdButton>
            ) : (
              ""
            )}
            <Button onClick={KakaoLogout}>????????????</Button>
            <ProfileNameBox>
              <p>
                <Highlight>{userName}</Highlight>??? ???????????????.
              </p>
              <p>{admin ? "????????? ??????????????????." : ""}</p>
            </ProfileNameBox>
            <Link to={`/Member/${userId}`}>
            <ProfileImg src={userImage} alt="?????? ??????" />
            </Link>
          </ProfileBox>

          <HomePage />

          <Modal
            isOpen={openModal}
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            <ModalCloseBtn onClick={modalClose}>???</ModalCloseBtn>
            <ProdUpload />
          </Modal>
          <Modal
            isOpen={openSearchModal}
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            '{search}' ??? ????????? ??????????????? ?????????????
            <SearchProdContainer>
            {filterProduct.map((prod) => {
              return (

                <Link to={`/Product/detail/${prod.ProductNum}`} key={prod.ProductNum}>
                  <Card key={prod.ProductNum}>
                    <LavelContainer>
                      <>
                        <AgeLavel>
                          {prod.Age_range === "20~29"
                            ? "?????? 20????????? ?????? ????????"
                            : ""}
                        </AgeLavel>
                        <AgeLavel>
                          {prod.Age_range === "30~39"
                            ? "30?????? ?????? ????????? ????????"
                            : ""}
                        </AgeLavel>
                        <AgeLavel>
                          {prod.Age_range === "40~49"
                            ? "40??? ?????? ????????? ????????"
                            : ""}
                        </AgeLavel>
                        <AgeLavel>
                          {prod.Age_range === "50~59"
                            ? "50??? ?????? ????????? ????????"
                            : ""}
                        </AgeLavel>
                      </>
                    </LavelContainer>

                    <CardInContainer1>
                      <ProductImg
                        src={`http://3.34.59.69${prod.ProductImg}`}
                        alt="productImg"
                      />
                    </CardInContainer1>
                    <CardInContainer2>
                      <CardTextBox1>
                        <CardNameFont>{prod.ProductName}</CardNameFont>
                        <p>{prod.ProductPrice} ???</p>
                        <HashTag>
                          #{prod.ProductF1} #{prod.ProductF2} #{prod.ProductF3}
                        </HashTag>
                      </CardTextBox1>
                      <CardTextBox2>
                        <SLevelLawFont>
                          {prod.ProductSLevel === "low" ? "????????? ??????" : ""}
                        </SLevelLawFont>
                        <p>
                          {prod.ProductSLevel === "low"
                            ? "???????????? ????????? ?????? ?????? ??????????????? ????"
                            : ""}
                        </p>
                        <SLevelMidFont>
                          {prod.ProductSLevel === "mid" ? "????????? ??????" : ""}
                        </SLevelMidFont>
                        <p>
                          {prod.ProductSLevel === "mid"
                            ? "????????? ?????? ???????????? ????????? ???????????? ????????? ????"
                            : ""}
                        </p>
                        <SLevelHighFont>
                          {prod.ProductSLevel === "high" ? "????????? ??????" : ""}
                        </SLevelHighFont>
                        <p>
                          {prod.ProductSLevel === "high"
                            ? "???????????? ?????? ????????? ???????????? ??? ??????????????? ????"
                            : ""}
                        </p>
                      </CardTextBox2>
                    </CardInContainer2>
                    <LookFont className="font">
                      ???????????? ?????????????????? ???????????? ????????
                    </LookFont>
                  </Card>
                  </Link>
                
              );
            })}
            </SearchProdContainer>
            <ModalCloseBtn onClick={searchModalClose}>???</ModalCloseBtn>
          </Modal>
        </>
      ) : (
        <AllConatiner>
          <LoginImg
            src="https://cdn.spotaineco.com/news/photo/202008/1278_723_1053.jpg"
            alt="??????"
          />
          <LoginContainer>
            <TextBox>
              <TitleText>??????????????? ???????????????.</TitleText>
              <Text>
                ????????? ?????? ???????????? ??????????????? ?????? ????????? ???????????? ????????????
                ?????? ???????????? ?????????. ????????? ????????? ?????? ???????????? ????????????
                ???????????? ?????????????????????.
              </Text>
              <Text>???????????? ?????? ????????? ????????? ?????? ???????????? ???????????????.</Text>
            </TextBox>
            <KakaoButton onClick={KakaoLogin}>
              <IoChatbubbleSharp fontSize="16px" /> ???????????? ?????????
            </KakaoButton>
          </LoginContainer>
        </AllConatiner>
      )}
    </>
  );
};

export default Login;
