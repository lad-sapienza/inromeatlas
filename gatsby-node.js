const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: "contents" });

    createNodeField({
      node,
      name: "slug",
      value: slug.startsWith("/") ? slug : `/${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

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
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(node => {
    let pagePath;

    // **Gestione della homepage**
    if (node.frontmatter.slug === "home") {
      if (node.frontmatter.language === "en") {
        // La homepage inglese sarà `/en/`
        pagePath = "/en/";

        // Creiamo un ALIAS per la homepage inglese su `/`
        createPage({
          path: `/`,
          component: `${path.resolve("./src/templates/contents.jsx")}?__contentFilePath=${node.internal.contentFilePath}`,
          context: {
            id: node.id,
            lang: "en",
          },
        });
      } else {
        // La homepage italiana sarà `/it/`
        pagePath = "/it/";
      }
    } else {
      // **Gestione delle altre pagine normali**
      const langPrefix = node.frontmatter.language === "it" ? "/it" : "/en";
      pagePath = `${langPrefix}/${node.frontmatter.slug}`;
    }

    // **Creazione della pagina**
    createPage({
      path: pagePath.replace(/\/\//g, "/"), // Evita doppie barre nei percorsi
      component: `${path.resolve("./src/templates/contents.jsx")}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        lang: node.frontmatter.language,
      },
    });
  });
};
