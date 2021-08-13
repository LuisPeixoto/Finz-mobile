import { useField } from '@unform/core'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
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

interface InputRef {
  focus(): void
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))
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
        ref={inputElementRef}
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

export default forwardRef(Input)
