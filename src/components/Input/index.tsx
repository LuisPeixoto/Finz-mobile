import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'
import { TextInputProps } from 'react-native'
import { Value } from 'react-native-reanimated'
import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: String
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  icon,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField(
      {
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value
          inputElementRef.current.setNativeProps({ text: value })
        },

        clearValue() {
          inputElementRef.current.value = ''
          inputElementRef.current.clear()
        },
      },
      [fieldName, registerField],
    )
  })
  return (
    <Container>
      <Icon name={icon} size={20} color="#8584F7" />
      <TextInput
        keyboardAppearance="light"
        placeholderTextColor="#8584F7"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default Input
