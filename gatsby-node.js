exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    let DrupalBlocks = [];

    // Query for all basic pages.
    const PageQuery = await graphql(`
    {
      allNodePage {
        nodes {
          id
          drupal_id
          drupal_internal__nid
        }
      }
    }
    `);

    // Query for all basic and hero blocks.
    const BlockQuery = await graphql(`
    {
        allBlockContentBasic {
            nodes {
              drupal_id
              field_test_field
            }
          }
          allBlockContentHero {
            nodes {
              drupal_id
              field_headline
              field_cta {
                uri
                title
              }
              relationships {
                field_background {
                  relationships {
                    field_media_image {
                      uri {
                        value
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
     `);

    await Promise.all(
        BlockQuery.data.allBlockContentBasic.nodes.map( node => {
            DrupalBlocks.push(node);
        }),
    );

    await Promise.all(
        BlockQuery.data.allBlockContentHero.nodes.map( node => {
            DrupalBlocks.push(node);
        }),
    );

    // Build the pages and pass all blocks as a page context.
    await Promise.all(
        PageQuery.data.allNodePage.nodes.map( node => {
            createPage({
                path: `node/${node.drupal_internal__nid}`,
                component: require.resolve(`./src/templates/PageTemplate.js`),
                context: {
                    uuid: node.drupal_id,
                    drupal_blocks: DrupalBlocks
                }
            })
        }),
    );
}