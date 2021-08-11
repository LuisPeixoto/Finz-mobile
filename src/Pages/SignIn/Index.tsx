import React from 'react'
import { Container, Title } from './styles'
import { Image } from 'react-native'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FunctionComponent = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Mantenha-se conectado</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button
        onPress={() => {
          console.log('teste')
        }}
      >
        Entrar
      </Button>
    </Container>
  )
}

export default SignIn
