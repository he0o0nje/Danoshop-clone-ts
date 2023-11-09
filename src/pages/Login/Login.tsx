import React from "react";
import * as style from "./LoginStyle";
import TopBanner from "../../components/TopBanner/TopBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Login() {
  window.scroll({ top: 0, behavior: "auto" });

  return (
    <>
      <TopBanner />
      <Header isAboutHeader={true} />
      <style.Login>
        <div className="section_path">
          <ol>
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <strong>로그인</strong>
            </li>
          </ol>
        </div>
        <div className="title_area">
          <h2>로그인</h2>
        </div>
        <div className="login_form">
          <div className="login">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
        </div>
        <div className="security">
          <div className="login_security">
            <span>
              <input type="checkbox" /> &nbsp;
            </span>
            <label>보안접속</label>
          </div>
        </div>
        <div className="login_btn">
          <button>로그인</button>
        </div>
        <div className="wrap_find">
          <div>
            <a href="/">아이디 찾기</a>
          </div>
          <div>
            <a href="/">비밀번호 찾기</a>
          </div>
        </div>
        <div className="login__util">
          <div>아직 회원이 아니신가요?</div>
          <div>
            지금 회원가입을 하시면<br></br>다양하고 특별한 혜택이 준비되어
            있습니다.
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </div>
        <div className="login_sns">
          <div className="sns">SNS 로그인</div>
          <div className="wrap_sns_log">
            <button className="btnKakao">카카오 로그인</button>
            <button className="btnNaver">네이버 로그인</button>
            <button className="btnApple">Apple로 로그인</button>
          </div>
        </div>
      </style.Login>
      <Footer />
    </>
  );
}

export default Login;
