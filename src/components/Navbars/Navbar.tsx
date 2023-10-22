import React, { useState } from 'react'
import styles from './Navbar.module.scss';
import logo from '../../images/logo/logoPortfolio.png'
import { SVGLogo } from '../../pages/Home/components/SVG/SVG';

const Navbar = () => {

	const [isMobile, setIsMobile] = useState<boolean>(false);
	const handleBtnBurger = (e: React.MouseEvent<HTMLButtonElement>) => {
		isMobile ? setIsMobile(false) : setIsMobile(true);
	}
  return (
	<div className={styles.container}>
		<img src={logo} alt="logo" className={isMobile ? `${styles.hidden} ` : styles.logo} />
		{/* <SVGLogo /> */}
		<ul className={isMobile ? `${styles.uList}  ${styles.flex}`: styles.uList}>
				<li><a href="/">Home</a></li>
				<li><a href="#aboutMe">About Me</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#cv">CV</a></li>
				<li><a href="#contact">Contact Me</a></li>
		</ul>
		
		<button onClick={(e) => handleBtnBurger(e)} className={isMobile ? styles.hidden : styles.burger}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className={styles.customIcon}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
		<button onClick={(e) => handleBtnBurger(e)} className={isMobile ? styles.closeBtn  : styles.hidden}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className={styles.closeImg}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</button>
	</div>
  )
}

export default Navbar
