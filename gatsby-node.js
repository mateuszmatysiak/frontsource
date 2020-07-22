const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const categoryTemplate = path.resolve(`src/layouts/category.js`);
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const { data } = await graphql(
    `
      query queryCMSPage {
        allDatoCmsArticle {
          nodes {
            title
            id
          }
        }
        allDatoCmsTag {
          distinct(field: tagName)
        }
      }
    `
  );

  data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, { lower: true });
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });

  data.allDatoCmsTag.distinct.forEach(tag => {
    createPage({
      path: `blog/category/${tag}`,
      component: categoryTemplate,
      context: {
        id: tag,
      },
    });
  });
};