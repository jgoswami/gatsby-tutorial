import React from "react";
import {Link, useStaticQuery, graphql } from "gatsby";
import {
	header, heroContent, brand, description, navContainer, navList, overlay
} from "./header.module.css";


const Header = () => {

 const data = useStaticQuery(
 		graphql `
 			query  {
  				site {
    				siteMetadata {
      					description
      					title
    				}
  				}
			}`
 	)	
 return (
 		<header className={header}>
 			<div className={overlay}></div>
  			<div className={heroContent}>
 				<p className={brand}> 
 					<Link to="/">{data.site.siteMetadata.title}</Link> 
 				</p>
 				<p className={description}> 
 					{data.site.siteMetadata.description}
 				</p>
   			</div>

   			<nav className={navContainer}>
   				<ul className={navList}> 
   					<li> <Link to="/">Home</Link> </li>
   					<li> <Link to="/blog/">Blog</Link> </li>
   					<li> <Link to="/contact">Contact</Link> </li>
   				</ul>
    		</nav>
   		</header>
  	)	
}

export default Header