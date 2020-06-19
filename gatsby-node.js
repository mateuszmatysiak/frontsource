const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const { data } = await graphql(
    `
      query queryCMSPage {
        allDatoCmsArticle {
          nodes {
            title
            id
          }
        }
      }
    `
  )

  data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, { lower: true })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/layouts/post.js`)
//   const categoryTemplate = path.resolve(`src/layouts/category.js`)
//   const articles = graphql(
//     `
//       query queryCMSPage {
//         allDatoCmsArticle {
//           nodes {
//             title
//             id
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       Promise.reject(result.errors)
//     }
//   })

//   articles.allDatoCmsArticle.nodes.forEach(post => {
//     const slugifiedTitle = slugify(post.title, { lower: true })
//     createPage({
//       path: `blog/${slugifiedTitle}`,
//       component: blogPostTemplate,
//       context: {
//         id: post.id,
//       },
//     })
//   })

// const tags = graphql(`
//   {
//     allDatoCmsTag {
//       edges {
//         node {
//           tag
//           tagDescription
//         }
//       }
//     }
//   }
// `).then(result => {
//   if (result.errors) {
//     Promise.reject(result.errors)
//   }

//   tags.allDatoCmsTag.edges.forEach(({ tag, tagDescription }) => {
//     createPage({
//       path: `blog/category/${tag}`,
//       component: categoryTemplate,
//       context: {
//         id: tag,
//         tagDescription,
//       },
//     })
//   })
// })

// return Promise.all([articles, tags])
// }
