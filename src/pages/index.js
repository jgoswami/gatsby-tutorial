import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import {posts, button, featured} from "./blog.module.css"

const Index = () => {

	const data = useStaticQuery(
		graphql `
			query  {
  				allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    				edges {
      					node {
        					
        						frontmatter {
          					        title
          							featured {
    									childImageSharp {
      										fluid(maxWidth: 750) {
        										...GatsbyImageSharpFluid
      										}
    									}
  									}
        						}
        						id
         						fields {
        							slug
        						}
      						}
    					}
  					}
				}
		`
		)

 return (
  		<Layout>
  			<Metadata title="Home" description="AQUASCAPING Home Page"/>
			<ul className={posts}>
 				{data.allMarkdownRemark.edges.map(edge => {
 					return (
 						<li className={posts} key={edge.node.id}>

  							{
  								edge.node.frontmatter.featured && (
   									<Img className={featured}
      									fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
      									alt={edge.node.frontmatter.title}
   									 />
  								)
							}
							<div className={button}>
 								<Link to={`/blog/${edge.node.fields.slug}/`}> {edge.node.fields.slug}</Link>
 							</div>

 						</li>
 					)
 				})}
 			</ul>

  		</Layout>
  	)	
}

export default Index
