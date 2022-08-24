import { useContext } from 'react'

import { Total } from '../..'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormat } from '../../../../utils/formatter'

import * as S from './styles'

export function Card({ totalRaw, totalPromos, totalPayable }: Total) {
  const { items } = useContext(CartContext)

  return (
    <S.Wrapper>
      <S.Products>
        <S.Text>Products</S.Text>
        {items.map(item => (
          <S.Item key={item.id}>{item.quantity}x - {item.name}</S.Item>)
        )}
      </S.Products>
      <S.Total>
        <S.Item>Total: {priceFormat(totalRaw)}</S.Item>
        <S.Item>Total Promos: {priceFormat(totalPromos)}</S.Item>
        <S.Item>Total Payable: {priceFormat(totalPayable)}</S.Item>
      </S.Total>
    </S.Wrapper>
  )
}