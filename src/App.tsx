import React from 'react'

import { View, StatusBar } from 'react-native'

const App: React.FunctionComponent = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
  </>
)

export default App
