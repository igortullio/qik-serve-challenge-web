import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import * as S from "./styles";

export function Header() {
  const { items } = useContext(CartContext)
  const navigate = useNavigate()

  const allItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <S.Wrapper>
      <S.Logo onClick={() => navigate("/")}>LOGO</S.Logo>

      <S.Links>
        {items?.length > 0 && <S.Link to="/checkout">Click here. Items {items.length}({allItems})</S.Link>}      
      </S.Links>
    </S.Wrapper>
  )
}