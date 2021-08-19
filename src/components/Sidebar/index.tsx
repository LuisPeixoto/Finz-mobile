import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {
  Container,
  Header,
  Content,
  Image,
  Name,
  Career,
  Info,
  User,
} from './styles'

const Sidebar: React.FunctionComponent = ({ ...props }) => {
  return (
    <Container>
      <Header>
        <User>
          <Image
            style={{ resizeMode: 'cover' }}
            source={{
              uri: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
            }}
          />
          <Info>
            <Name>Luis Fernando Peixoto</Name>
            <Career>4,200 seguidores</Career>
          </Info>
        </User>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Home"
            onPress={() => {}}
            icon={({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )}
          />
          <DrawerItem
            label="Minha conta"
            onPress={() => {}}
            icon={({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            )}
          />

          <DrawerItem
            label="Sair"
            onPress={() => {}}
            icon={({ color, size }) => (
              <Icon name="log-out" color={color} size={size} />
            )}
          />
        </DrawerContentScrollView>
      </Content>
    </Container>
  )
}

export default Sidebar
