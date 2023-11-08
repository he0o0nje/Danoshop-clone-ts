import React from "react";
import * as style from "./CartAlertStyle";

function CartAlert() {
  return (
    <>
      <style.AlertWrap>
        <div className="alert">
          <div className="content">
            <p>
              장바구니에 상품이<br></br>정상적으로 담겼습니다.
            </p>
          </div>
          <div className="submit_btn">
            <button className="continue">계속 쇼핑하기</button>
            <button className="cart">장바구니 이동</button>
          </div>
          <button className="close_btn">닫기</button>
        </div>
      </style.AlertWrap>
    </>
  );
}

export default CartAlert;
