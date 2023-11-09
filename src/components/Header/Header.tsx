import React, { useState, useEffect } from "react";
import * as style from "./HeaderStyle";
import { Link } from "react-router-dom";

interface HeaderProps {
  isAboutHeader: boolean;
}

function Header({ isAboutHeader }: HeaderProps): JSX.Element {
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setHeaderFixed(true) : setHeaderFixed(false);
    });

    return () => {
      // window.removeEventListener("scroll", () => {});
    };
  }, []);

  const cate = [
    { id: 1, name: "전 상품" },
    { id: 2, name: "SALE" },
    { id: 3, name: "100원딜" },
    { id: 4, name: "식단관리" },
    { id: 5, name: "간편식" },
    { id: 6, name: "베이커리" },
    { id: 7, name: "간식·음료" },
    { id: 8, name: "분식·반찬" },
    { id: 9, name: "홈트용품" },
    { id: 10, name: "리빙용품" },
  ];
  return (
    <>
      <style.HeaderWrap isFixed={isHeaderFixed} isAboutHeader={isAboutHeader}>
        <style.Header>
          <style.HeaderTop>
            <ul className="top_list">
              <li>
                <Link to="/Login">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="#">주문조회</Link>
              </li>
              <li>
                <Link to="#">최근본상품</Link>
              </li>
              <li>
                <style.boardList>
                  <Link to="#">
                    고객센터
                    <i className="arrRgt"></i>
                  </Link>
                  <ul className="board_list">
                    <li>
                      <Link to="#">공지사항</Link>
                    </li>
                    <li>
                      <Link to="#">상품 사용후기</Link>
                    </li>
                    <li>
                      <Link to="#">상품 Q&A</Link>
                    </li>
                  </ul>
                </style.boardList>
              </li>
            </ul>
          </style.HeaderTop>
          <style.HeaderBottom>
            <style.LogoWrap>
              <Link to="/">
                <img
                  src="https://he0o0nje.github.io/Danoshop-clone-ts/img/header/logo.jpg"
                  alt=""
                />
              </Link>
            </style.LogoWrap>
            <style.MypageWrap>
              <Link to="/Login">
                <img
                  src="https://he0o0nje.github.io/Danoshop-clone-ts/img/header/mypage1.svg"
                  alt=""
                />
              </Link>
              <Link to="/cart">
                <img
                  src="https://he0o0nje.github.io/Danoshop-clone-ts/img/header/mypage2.svg"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="https://he0o0nje.github.io/Danoshop-clone-ts/img/header/mypage3.svg"
                  alt=""
                />
              </Link>
            </style.MypageWrap>
            <style.BotCategory>
              <ul>
                {cate.map((item, index) => (
                  <li key={index}>
                    <Link to={`/detail/${item.id}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </style.BotCategory>
          </style.HeaderBottom>
        </style.Header>
      </style.HeaderWrap>
    </>
  );
}

export default Header;
