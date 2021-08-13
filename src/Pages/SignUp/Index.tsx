import React, { useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
} from 'react-native'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, ToSignIn, ToSignInText } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

const SignUp: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Mantenha-se conectado</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={(data) => {
                console.log(data)
              }}
            >
              <Input
                name="name"
                autoCapitalize="words"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                autoCorrect={false}
                name="email"
                ref={emailInputRef}
                autoCapitalize="none"
                keyboardType="email-address"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                name="password"
                ref={passwordInputRef}
                secureTextEntry
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                textContentType="newPassword"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <ToSignIn onPress={() => navigation.goBack('SignIn')}>
        <Icon name="log-in" size={20} color="#8584F7" />
        <ToSignInText>Fazer Login</ToSignInText>
      </ToSignIn>
    </>
  )
}

export default SignUp
