import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { apiServer } from "../../libs/axios";
import { Card } from "./components/Card";

import * as S from "./styles";

export interface Total {
  totalRaw: number
  totalPromos: number
  totalPayable: number
}

export function Checkout() {
  const { items } = useContext(CartContext)
  const [total, setTotal] = useState<Total | null>(null)

  async function fetchTotal() {
    const response = await apiServer.post("/checkout/calculate-total", items)
    setTotal(response.data)
  }

  useEffect(() => {
    fetchTotal()
  }, [])

  if (!total) {
    return <S.Loading>loading</S.Loading>
  }

  return (
    <S.Wrapper>
      <Card {...total} />
    </S.Wrapper>
  )
}