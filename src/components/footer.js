import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { siteFooter, container} from "./footer.module.css"


const Footer = () => {
  const data = useStaticQuery(
    graphql `
      query  {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
      }`
  ) 
  
 return (
 		<footer className={siteFooter}>
  	   <div className={container}>
 				<p> Site developed by {data.site.siteMetadata.author.name} &copy; {new Date().getFullYear().toString()}{" "} </p>
      </div>
    </footer>

  	)	
}

export default Footer