import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home'

const App = createStackNavigator()

const AppRoutes: React.FunctionComponent = () => (
  <App.Navigator>
    <App.Screen
      name="Home"
      component={Home}
      options={{ cardStyle: { backgroundColor: '#fff' } }}
    />
  </App.Navigator>
)

export default AppRoutes
