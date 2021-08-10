import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../Pages/SignIn/Index'
import SignUp from '../Pages/SignUp/Index'

const Auth = createStackNavigator()

const AuThRoutes: React.FunctionComponent = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ cardStyle: { backgroundColor: '#fff' } }}
    />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
)

export default AuThRoutes
