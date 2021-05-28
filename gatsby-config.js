module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-drupal`,
            options: {
                baseUrl: `http://d9.lndo.site/`,
                apiBase: `jsonapi`, // optional, defaults to `jsonapi`
            },
        },
    ]
}