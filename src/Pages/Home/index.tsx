import React from 'react'
import { Button, Text, View } from 'react-native'
import { useAuth } from '../../hooks/auth'

const Home: React.FunctionComponent = () => {
  const { signOut } = useAuth()
  return (
    <View>
      <Button title="Sair" onPress={signOut} />
    </View>
  )
}

export default Home
