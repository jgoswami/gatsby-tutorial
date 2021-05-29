
import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import { container, content, mainContent} from "./layout.module.css"

const Layout = props => {
 return (
  		<div className={container}>
  			<div className={content}>
  				<Header />
  				<div className={mainContent}> {props.children} </div>	
  			</div>
  			<Footer />
  		</div>
  	)	
}

export default Layout