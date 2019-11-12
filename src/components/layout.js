import React from 'react';
import styled from 'styled-components';

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
//import layoutStyles from './layout.module.scss'

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <Container>
      <Content>
        <Header />
        {props.children}
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout