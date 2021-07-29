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
            // Passing the page slug as context, rest of data is collected on page template
            context: {slug: edge.node.slug.current},
        })
    })
}