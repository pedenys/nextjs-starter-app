import React from 'react'
import styled from '../theme'

const Title = styled.h1`
  margin: 2rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
`

const Home = () => {
  return <Title>Hello world !</Title>
}

export default Home
