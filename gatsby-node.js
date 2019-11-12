// Goal 1 - Generate a slug for each post
// gatsby.md --> gatsby --> /blog/gatsby

// Goal 2 - Generate the blog post page template

// Goal 3 - Generate a new page for each post

const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    //console.log(node)
    //console.log(JSON.stringify(node, undefined, 4))
    const slug = path.basename(node.fileAbsolutePath, '.md')
    //console.log('@@@@@@@@@@@@@@@', slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages

  const { createPage } = actions
  const blogTempalte = path.resolve('./src/templates/blog.js')

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTempalte,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  });
  // res.data.allMarkdownRemark.edges.forEach(edge => {
  //   createPage({
  //     component: blogTempalte,
  //     path: `/blog/${edge.node.fields.slug}`,
  //     context: {
  //       slug: edge.node.fields.slug
  //     }
  //   })
  // });
  
}