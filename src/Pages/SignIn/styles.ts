import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`

export const Title = styled.Text`
  font-family: 'Lato-Regular';
  color: #656565;
  font-size: 21px;
  margin: 32px 0;
`
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`

export const ForgotPasswordText = styled.Text`
  font-family: 'Lato-Regular';
  color: #656565;
  font-size: 16px;
`
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  border-top-width: 1px;
  border-color: #efefef;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const CreateAccountButtonText = styled.Text`
  color: #8584f7;
  font-family: 'Lato-Regular';
  font-size: 18px;
  margin-left: 16px;
`
