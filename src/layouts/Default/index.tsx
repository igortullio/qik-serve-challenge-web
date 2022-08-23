import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import * as S from './styles'

export function Default() {
  return (
    <S.Wrapper>
      <Header />
      <Outlet />
    </S.Wrapper>
  )
}