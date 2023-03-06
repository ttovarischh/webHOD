import styled from "styled-components";
import { FlexBox, HeaderFooter } from "../../components";
import A_Button from "../../components/A_Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import A_Input from "../../components/A_Input";
import useAuth from "../../authContext/useAuth";
import { useNavigate } from "react-router-dom";

const AuthWrapper = styled(FlexBox)`
  width: 100%;
  height: calc(100vh - 176px);
  padding-top: 88px;
  padding-bottom: 88px;
  overflow: hidden;
  position: relative;
  direction: column;
  align-content: center;
  button {
    width: 100%;
  }
`;

const MainImage = styled.div`
  position: absolute;
  width: 1967.22px;
  height: 1588.77px;
  left: calc(50vw - 983.61px);
  top: calc(50vh - 794.385px);
  pointer-events: none;
  filter: blur(50px);
  svg {
    width: 1967.22px;
    height: 1588.77px;
  }
`;

const ActionWrapper = styled(FlexBox)`
  z-index: 100;
`;

const MyLink = styled.a`
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #a4a4ac;
  opacity: 0.5;
  margin-top: 24px;
  margin-bottom: 30px;
`;

const Breadcrumb = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #a4a4ac;
  opacity: 0.8;
  margin-top: 30px;
  a {
    text-decoration: underline;
  }
`;

export default function SignIn() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  // const { login } = useAuth();
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    if (newUser.password.length < 6) {
      setIsEmpty(true);
    } else {
      login(newUser.email, newUser.password);
      navigate("/");
    }
    event.preventDefault();
  };

  // const doSignIn = async () => {
  //   try {
  //     const response = await fetch(apiUrl + "login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user: {
  //           email: newUser.email,
  //           password: newUser.password,
  //         },
  //       }),
  //     });
  //     let json = await response.json();
  //     console.log(json);

  //     if (typeof json["jti"] !== "undefined") {
  //       const handleLogin = () => {
  //         login({
  //           username: json.username,
  //           email: json.email,
  //           id: json.id,
  //           authToken: json.jti,
  //         });
  //       };

  //       alert('You are successfully logged in as a user "' + json.email + '"');
  //     } else if (typeof json["message"] !== "undefined") {
  //       alert(json.message);
  //     } else console.log(json);
  //   } catch (error) {
  //     alert(error);
  //   } finally {
  //   }
  // };

  const handleInputChange = (event: any) => {
    setIsEmpty(false);
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
    <AuthWrapper justifyContent="center">
      <MainImage>
        <svg
          width="1994"
          height="1792"
          viewBox="0 0 1994 1792"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M727.331 1279.42C606.383 1074.93 390.966 874.225 1.86494 880.308L0.166513 771C437.722 764.159 685.675 994.234 821.434 1223.76C888.786 1337.64 928.767 1451.41 951.941 1536.4C963.557 1579 971.028 1614.66 975.62 1639.87C977.918 1652.48 979.499 1662.51 980.521 1669.5C981.032 1673 981.403 1675.74 981.654 1677.68C981.779 1678.64 981.875 1679.41 981.943 1679.97L982.024 1680.64L982.05 1680.86L982.059 1680.94C982.063 1680.97 982.066 1681 927.756 1687.22C873.447 1693.44 873.449 1693.46 873.451 1693.48L873.419 1693.21C873.384 1692.93 873.323 1692.44 873.234 1691.75C873.056 1690.38 872.764 1688.21 872.34 1685.31C871.492 1679.5 870.116 1670.75 868.062 1659.47C863.952 1636.91 857.146 1604.35 846.463 1565.17C825.038 1486.59 788.331 1382.56 727.331 1279.42Z"
            fill="#2520FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1117.43 1064.7C1251.9 987.071 1297.97 815.142 1220.35 680.692C1142.72 546.241 970.79 500.182 836.324 577.816C701.859 655.449 655.78 827.378 733.405 961.829C811.03 1096.28 982.964 1142.34 1117.43 1064.7ZM1172.09 1159.38C1358.85 1051.55 1422.85 812.763 1315.03 626.026C1207.22 439.289 968.423 375.318 781.665 483.143C594.907 590.968 530.909 829.757 638.722 1016.49C746.535 1203.23 985.331 1267.2 1172.09 1159.38Z"
            fill="#2520FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1344.48 115.036C1112.02 91.2225 855.756 143.274 658.22 265.854L657.481 266.312L656.729 266.747C309.359 467.301 190.323 911.45 390.854 1258.78L296.171 1313.45C65.5969 914.08 202.235 403.462 601.315 172.51C821.168 36.3449 1101.7 -19.7298 1355.64 6.2837C1608.95 32.2339 1846.89 141.544 1966.66 348.99L1993.99 396.326L1472.46 697.43L1417.8 602.757L1841.79 357.967C1737.95 219.472 1555.58 136.661 1344.48 115.036Z"
            fill="#2520FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M677.87 1620.53L732.539 1525.86L933.862 1642.08L1050.11 1440.75L1144.79 1495.41L973.871 1791.41L677.87 1620.53Z"
            fill="#2520FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1463.53 351.401L1569.13 379.691L1508.95 604.235L1733.5 664.389L1705.2 769.987L1375.04 681.543L1463.53 351.401Z"
            fill="#2520FF"
          />
        </svg>
      </MainImage>
      <ActionWrapper direction="column">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <A_Input
            name="email"
            type="email"
            placeholder="dungeonmaster@gmail.com"
            onChange={handleInputChange}
            label="Почта"
            style={{ marginBottom: 12 }}
          ></A_Input>
          <A_Input
            name="password"
            type="password"
            placeholder="∗∗∗∗∗∗∗"
            onChange={handleInputChange}
            className={isEmpty ? "empty" : ""}
            label="Пароль"
          ></A_Input>
          <MyLink className="PPbook">Забыли пароль?</MyLink>
          <A_Button
            solid
            disabled={newUser.email === "" || newUser.password === ""}
            handleButtonClick={handleSubmit}
          >
            Вход
          </A_Button>
        </form>
        <Breadcrumb className="PPMedium">
          Нет аккаунта? <Link to="/">Зарегистрируйтесь</Link>
        </Breadcrumb>
      </ActionWrapper>
    </AuthWrapper>
  );
}
