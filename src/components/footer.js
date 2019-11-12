import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const FooterStyle = styled.footer `
  margin-top: 3rem;
  color: red;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <FooterStyle>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </FooterStyle>
  )
}

export default Footer