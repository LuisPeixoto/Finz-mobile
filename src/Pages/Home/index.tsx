import React from 'react'
import { StatusBar } from 'react-native'
import { useAuth } from '../../hooks/auth'

const Home: React.FunctionComponent = () => {
  const { signOut } = useAuth()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4946fa" />

      {/* <Button title="Sair" onPress={signOut} /> */}
    </>
  )
}

export default Home
