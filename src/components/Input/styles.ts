import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #f1f1f1;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #4946fa;
    `}
`
export const TextInput = styled.TextInput`
  flex: 1;
  color: #4946fa;
  font-size: 16px;
  font-family: 'Talo-Regular';
`
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
