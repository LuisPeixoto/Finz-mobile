import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 84px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #4946fa;
  /* border-bottom-left-radius: 32px; */
  /* border-bottom-right-radius: 32px; */
`
export const Search = styled.View`
  flex: 1;
  height: 42px;
  padding: 0 8px;
  margin-right: 16px;
  background: #7876ff;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`
export const NewPosts = styled.View``
export const User = styled.TouchableOpacity`
  margin-right: 16px;
  align-items: center;
  height: 42px;
  justify-content: center;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  margin-left: 4px;
  font-family: 'Talo-Regular';
`
