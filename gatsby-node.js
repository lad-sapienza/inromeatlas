const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: "contents" })
    createNodeField({
      node,
      name: "slug",
      value: slug.startsWith("/") ? slug : `/${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            language
            slug
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    const languagePrefix = node.frontmatter.language
      ? `/${node.frontmatter.language}`
      : ""
    let pagePath

    // Homepage inglese gestita come "/" e "/en/home"
    if (
      node.frontmatter.slug === "home" &&
      node.frontmatter.language === "en"
    ) {
      createPage({
        path: `/en/home`,
        component: `${path.resolve(
          "./src/templates/contents.jsx",
        )}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
          language: node.frontmatter.language,
        },
      })

      // Alias per "/"
      pagePath = "/"
    } else {
      // Percorso normale per tutte le altre pagine
      pagePath = `${languagePrefix}${node.fields.slug}`
    }

    createPage({
      path: pagePath.replace(/\/\//g, "/"), // Evita doppie barre
      component: `${path.resolve(
        "./src/templates/contents.jsx",
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        language: node.frontmatter.language,
      },
    })
  })
}
