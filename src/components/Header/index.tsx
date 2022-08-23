import * as S from "./styles";

import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Logo onClick={() => navigate("/")}>LOGO</S.Logo>

      <S.Links>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/checkout">Checkout</S.Link>
      </S.Links>
    </S.Wrapper>
  )
}