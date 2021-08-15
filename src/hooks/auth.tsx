import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SigninCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  signIn(credentials: SigninCredentials): Promise<void>
  signOut(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    ;() => {
      async function loadStorageData(): Promise<void> {
        const token = await AsyncStorage.getItem('@Finz:token')
        const user = await AsyncStorage.getItem('@Finz:user')

        if (token[1] && user[1]) {
          setData({ token: token[1], user: JSON.parse(user[1]) })
        }
      }
      loadStorageData()
    }
  }, [])
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    await AsyncStorage.setItem('@Finz:token', token)
    await AsyncStorage.setItem('@Finz:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Gobarber:token')
    await AsyncStorage.removeItem('@Gobarber:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
