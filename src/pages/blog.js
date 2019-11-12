import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

// import Footer from '../components/footer'
// import Header from '../components/header'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const Blog = styled.ol`
  list-style-type: none;
  margin: 0;
`
const List = styled.li`
  margin: 1rem 0;

  a {
    background: #f4f4f4;
    color: #000;
    display: block;
    padding: 1rem;
    text-decoration: none;
  }

  a:hover {
    background: #e4e4e4;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    color: #777;
    font-size: .8rem;
    font-style: italic;
  }
`

const BlogPage = () => {
  // Markdown posts
  // const data = useStaticQuery(graphql `
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data)

  // CMS posts (Contentful)
  const data = useStaticQuery(graphql `
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  
  return (
    <div>
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <Blog>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <List>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>  
              </List>
            )
          })}
        </Blog>
      </Layout>
    </div>
  )
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Blog</h1>
  //       <ol className={blogStyles.posts}>
  //         {data.allMarkdownRemark.edges.map(edge => {
  //           return (
  //             <li className={blogStyles.post}>
  //               <Link to={`/blog/${edge.node.fields.slug}`}>
  //                 <h2>{edge.node.frontmatter.title}</h2>
  //                 <p>{edge.node.frontmatter.date}</p>
  //               </Link>  
  //             </li>
  //           )
  //         })}
  //       </ol>
  //     </Layout>
  //   </div>
  // )
}

export default BlogPage