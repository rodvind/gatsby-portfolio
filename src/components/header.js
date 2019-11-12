import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

// import './header.module.scss'
// import headerStyles from './header.module.scss'

const StyledHeader = styled.header`
  color: blue;
  padding: 1 rem 0 3 rem;
`

const StyledLink = styled(props => <Link { ...props } />)`
  color: orange;
  color: #000000;
  font-size: 3rem;
  text-decoration: none; 
`

const StyledList = styled.nav`
  display: flex;
  list-style-type: none;
  margin: 0;
`
const StyledListItem = styled(props => <Link { ...props } activeClassName='active' />)`
  color: #999999;
  font-size: .9rem;
  margin-right: 1.3rem;
  text-decoration: none;
  &.active {
    color: green;
  }
  &:hover {
    color: orange;
  }

`


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">
          {data.site.siteMetadata.title}
        </StyledLink>
      </h1>
      <nav>
        <StyledList>
          <li>
            <StyledListItem
              to = "/"
            >Home
            </StyledListItem>
            {/* <Link 
              to = "/"
              className={headerStyles.navItem} 
              activeClassName={headerStyles.activeNavItem}
            >Home
            </Link> */}
          </li>
          <li>
            <StyledListItem 
              to="/blog"
            >Blog
            </StyledListItem>
          </li>
          <li>
            <StyledListItem 
              to="/about"
            >About
            </StyledListItem>
          </li>
          <li>
            <StyledListItem 
              to="/contact"
            >Contact
            </StyledListItem>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  )
}

export default Header
