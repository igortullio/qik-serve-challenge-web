import { useEffect, useState } from "react";

import { apiWiremock } from "../../libs/axios";
import { Card } from "./components/Card";

import * as S from "./styles";

export interface Product {
  id: string
  name: string
  price: number
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  async function fetchProducts() {
    const response = await apiWiremock.get("/products")
    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <S.Wrapper>
      <S.CardList>
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </S.CardList>
    </S.Wrapper>
  )
}
