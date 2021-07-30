exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const result = await graphql(`
        {
            allSanityPost(filter: {slug: {current: {ne: null}}}) {
                edges {
                    node {
                        slug {
                            current
                        }
                        id
                        title
                        seoTitle
                        seoDescription
                        _rawBody
                        _updatedAt
                        _createdAt
                        author {
                          name
                          mainImage {
                            alt
                            asset {
                              fixed(width: 400) {
                                base64
                                width
                                height
                                src
                                srcSet
                              }
                            }
                          }
                          bio {
                            _key
                            _type
                            style
                            list
                            _rawChildren
                          }
                        }
                        categories {
                          title
                        }
                        mainImage {
                          alt
                          asset {
                            fluid(maxWidth: 1000) {
                              base64
                              aspectRatio
                              src
                              srcSet
                              sizes
                            }
                          }
                        }
                        body {
                          _key
                          _type
                          style
                          list
                          _rawChildren
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        throw result.errors
    }

    const posts = result.data.allSanityPost.edges || []
    posts.forEach((edge, index) => {
        const path = `/blog/${edge.node.slug.current}`
        createPage({
            path,
            component: require.resolve('./src/templates/BlogPosts.js'),
            // Passing all the data to the page
            context: {data: edge.node},
        })
    })
}