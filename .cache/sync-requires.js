const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/src/pages/about.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/src/templates/blog-post.js"))),
  "component---src-pages-home-page-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/src/pages/HomePage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/asc/Desktop/100DaysOfGatsby/tutorial-part-four/src/pages/my-files.js")))
}

