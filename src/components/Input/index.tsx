import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  icon,
  ...rest
}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#8584F7" />
      <TextInput
        keyboardAppearance="light"
        placeholderTextColor="#8584F7"
        {...rest}
      />
    </Container>
  )
}

export default Input
