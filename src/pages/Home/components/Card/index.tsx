import { useContext, useState } from 'react'

import { Product } from '../..'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export function Card({ name, price }: Product) {
  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Price>
        {priceFormatter.format(price / 100)}
      </S.Price>
      <S.Button>Add</S.Button>
    </S.Wrapper>
  )
}
