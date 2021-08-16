import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../Pages/SignIn/Index'
import SignUp from '../Pages/SignUp/Index'
import Welcome from '../Pages/Welcome'

const Auth = createStackNavigator()

const AuThRoutes: React.FunctionComponent = () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ cardStyle: { backgroundColor: '#fff' } }}
    />

    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ cardStyle: { backgroundColor: '#fff' } }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ cardStyle: { backgroundColor: '#fff' } }}
    />
  </Auth.Navigator>
)

export default AuThRoutes
