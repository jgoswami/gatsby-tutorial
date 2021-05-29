/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
  	title: "Aquascape",
  	description: "Aquariums, Aquascapes and more...",
  	author: { 
  		name: "greengosu",
  		summary: "I build stuff",
  	},
  	desc2: "Glimpse into my Aqua world",
  },
  plugins: [
  		
  		"gatsby-plugin-react-helmet",	
  		"gatsby-plugin-sharp",
  		"gatsby-transformer-sharp",
  		{
  			resolve: "gatsby-transformer-remark",
  			options: {
  				plugins: [
  				{
  					resolve: "gatsby-remark-images",
  					options: {
  						maxWidth: 750,
  						linkImagesToOriginal: false,
  					},
  				},
  				],
  			},
  		},
  		{
  			resolve: "gatsby-plugin-sass",
  			options: {
  				cssLoaderOptions: {
  					esModule: false,
  					modules: {
  						namedExport: false,
  					},
  				},
  			},
  		},
  		{
  			resolve: "gatsby-source-filesystem",
  			options: {
  				name: "src",
  				path: `${__dirname}/src/`,
  			},
  		},

  	],
}
