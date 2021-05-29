import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import {posts, meta, featured, excerpt, button} from "./blog.module.css"

const Blog = () => {
	const data = useStaticQuery(
		graphql `
			query  {
  				allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    				edges {
      					node {
        					excerpt
        						frontmatter {
          							date(formatString: "DD MMMM, YYYY")
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
        						timeToRead
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
			<ul className={posts}>
 				{data.allMarkdownRemark.edges.map(edge => {
 					return (
 						<li className={posts} key={edge.node.id}>
 							<h2>
 								<Link to={`/blog/${edge.node.fields.slug}/`}> {edge.node.frontmatter.title}</Link>
 							</h2>
 							<div className={meta}>
 								<span>
 									Posted on {edge.node.frontmatter.date} <span> / </span> {" "}
 	 							 	{edge.node.timeToRead} min read 
 								 </span>
 							</div>
 							{
  								edge.node.frontmatter.featured && (
   									<Img className={featured}
      									fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
      									alt={edge.node.frontmatter.title}
   									 />
  								)
							}
 							<p className={excerpt}> {edge.node.excerpt}</p>
 							<div className={button}>
 								<Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
 							</div>
 						</li>
 					)
 				})}
 			</ul>

  		</Layout>
  	)	
}

export default Blog