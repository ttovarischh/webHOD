import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FlexBox, Big_Panama, Note, Large } from "../../components";
import styled from "styled-components";
import A_Button from "../../components/A_Button";
import useAuth from "../../authContext/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import A_Loader from "../../components/A_Loader";
import A_Input from "../../components/A_Input";

const ProfileWrapper = styled(FlexBox)`
  padding-top: 88px;
  padding-left: 66px;
  padding-right: 66px;
  width: 100%;
  height: calc(100vh - 176px);
  justify-content: space-between;
`;

const CountFlexbox = styled(FlexBox)``;
const UserInfo = styled(FlexBox)``;

const MainImage = styled.div`
  position: absolute;
  background-size: auto 100vh;
  height: 100%;
  width: 972px;
  right: -100px;
  background-repeat: no-repeat;
  background-position: center right;
  top: 50px;
  pointer-events: none;
`;

export default function Settings() {
  const [isLoading, setLoading] = useState(true);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users/" + user!.id)
      .then(({ data }) => {
        setEffectsData(data.games);
        console.log(effectsData);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(newUser);
    setNewUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      {isLoading ? (
        <A_Loader></A_Loader>
      ) : (
        <ProfileWrapper direction="column">
          <FlexBox style={{ gap: 80 }}>
            <CountFlexbox direction="column">
              <Big_Panama>{effectsData!.length}</Big_Panama>
              <Large color={theme.text.grey}>игр сыграно</Large>
            </CountFlexbox>
            <CountFlexbox direction="column">
              <Big_Panama>{effectsData!.length * 3}</Big_Panama>
              <Large color={theme.text.grey}>игр проведено</Large>
            </CountFlexbox>
          </FlexBox>
          <form style={{display: "flex", justifyContent: "space-between", flexDirection: "column", flex: 1, marginTop: 90}}>
            <UserInfo direction="column" style={{ gap: 12 }}>
              <A_Input
                name="email"
                type="email"
                placeholder="Почта"
                onChange={handleInputChange}
                label="Почта"
                style={{ marginBottom: 12 }}
              ></A_Input>
              <A_Input
                name="email"
                type="email"
                placeholder="Почта"
                onChange={handleInputChange}
                label="Почта"
                style={{ marginBottom: 12 }}
              ></A_Input>
              <A_Input
                name="email"
                type="email"
                placeholder="Почта"
                onChange={handleInputChange}
                label="Почта"
                style={{ marginBottom: 12 }}
              ></A_Input>
            </UserInfo>
            <FlexBox alignItems="center" style={{ gap: 46 }}>
              <Link to="login">
                <A_Button handleButtonClick={() => navigate(-1)}>
                  Отменить изменения
                </A_Button>
              </Link>
              <A_Button handleButtonClick={() => console.log("saved")} solid>
                Сохранить изменения
              </A_Button>
            </FlexBox>
          </form>
          <MainImage
            style={{
              backgroundImage: "url(" + require("../../images/bird.png") + ")",
            }}
          ></MainImage>
        </ProfileWrapper>
      )}
    </>
  );
}