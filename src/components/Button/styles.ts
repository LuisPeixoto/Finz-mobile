import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface ButtonProps {
  color?: string
  textColor?: string
  hasBorder?: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 60px;

  background: #4946fa;
  ${(props) =>
    !!props.color &&
    css`
      background: ${props.color};
    `}
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  ${(props) =>
    props.hasBorder &&
    css`
      background: transparent;
    `}
`

export const ContainerBorder = styled.View<ButtonProps>`
  ${(props) =>
    props.hasBorder &&
    css`
      width: 100%;
      height: 100%;
      background: transparent;
      border-width: 2px;
      border-color: #ccc;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
    `}
`
export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Lato-Regular';
  color: #fff;
  ${(props) =>
    !!props.textColor &&
    css`
      color: ${props.textColor};
    `}
  font-size: 18px;
`
