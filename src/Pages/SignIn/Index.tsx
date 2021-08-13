import React, { useCallback, useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const SignIn: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])
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
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                icon="mail"
                placeholder="E-mail"
              />
              <Input name="password" icon="lock" placeholder="Senha" />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm()
              }}
            >
              Entrar
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#8584F7" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
}

export default SignIn
