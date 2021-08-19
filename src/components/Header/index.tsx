import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { Container, Search, NewPosts, User, TextInput } from './styles'

const Header: React.FunctionComponent = ({ navigation }) => {
  return (
    <Container>
      <User
        onPress={() => {
          navigation.openDrawer()
        }}
      >
        <Icon name="menu" color="#fff" size={32} />
      </User>
      <Search>
        <Icon name="search" color="#fff" size={24} />

        <TextInput
          selectionColor="#fff"
          placeholderTextColor="#fff"
          placeholder="Faça uma pesquisa"
        />
      </Search>
      <NewPosts>
        <Icon name="plus" color="#fff" size={32} />
      </NewPosts>
    </Container>
  )
}

export default Header
