import { useContext } from 'react'

import { Product } from '../..'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormat } from '../../../../utils/formatter'

import * as S from './styles'

export function Card({ id, name, price }: Product) {
  const { addItem } = useContext(CartContext)

  function handleAddItem() {
    addItem({ id, name, quantity: 1 })
  }

  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Price>{priceFormat(price)}</S.Price>
      <S.Button onClick={handleAddItem}>Add</S.Button>
    </S.Wrapper>
  )
}
