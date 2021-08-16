import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Container, Title, Vector, Buttons } from './styles'
import vectorImg from '../../assets/vector.png'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/core'

const Welcome: React.FunctionComponent = () => {
  const navigation = useNavigation()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4946fa" />
      <Container colors={['#4946fa', '#3331ac']}>
        <Title>
          Junte-se a nossa rede e comece a compartilhar as suas ideias
        </Title>
        <Vector>
          <Image source={vectorImg} />
        </Vector>
        <Buttons>
          <Button
            color="#fff"
            textColor="#4946fa"
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          >
            Realizar o login
          </Button>

          <Button
            color="#fff"
            hasBorder={true}
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            Cadastra-se
          </Button>
        </Buttons>
      </Container>
    </>
  )
}

export default Welcome
