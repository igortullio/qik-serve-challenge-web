import { useContext, useState } from 'react'

import { Product } from '../..'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export function Card({ id, name, price }: Product) {
  const { addItem } = useContext(CartContext)

  function handleAddItem() {
    addItem(id)
  }

  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Price>{priceFormatter.format(price / 100)}</S.Price>
      <S.Button onClick={handleAddItem}>Add</S.Button>
    </S.Wrapper>
  )
}
