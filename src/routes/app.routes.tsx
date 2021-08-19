import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home'
import Header from '../components/Header'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from '../components/Sidebar'

const App = createStackNavigator()

const AppRoutes: React.FunctionComponent = () => (
  <App.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        backgroundColor: '#4946fa',
      },
    }}
  >
    <App.Screen
      name="Home"
      component={Home}
      options={{
        cardStyle: { backgroundColor: '#fff' },
        header: (props) => <Header {...props} />,
      }}
    />
  </App.Navigator>
)

const AppDrawer: React.FunctionComponent = () => {
  const AppDrawer = createDrawerNavigator()
  return (
    <AppDrawer.Navigator
      initialRouteName="Root"
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <AppDrawer.Screen
        name="Root  "
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </AppDrawer.Navigator>
  )
}

export default AppDrawer
