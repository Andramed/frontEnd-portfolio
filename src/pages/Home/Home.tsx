import React from 'react'
import styles from './Home.module.scss'
import photo from "../../images/photo.png"
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import CV from './components/CV'


const Home: React.FC = () => {
  return (
	<main className={styles.main}>
		<div className={styles.wrapperDescriptions}>
			<section className={styles.descriptions}>
				<p>
					<span>Hello! I'm Vlad,</span> <br /> and I'm at the beginning of my career as a full-stack developer. Even though I have limited experience in the field, my passion for technology and my desire to learn motivated me to explore and become familiar with various technologies such as : JavaScript, HTML & CSS, React and NodeJS .
				</p>
				<section className={styles.location}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />

					</svg>
					<p>
						Warsawa, Poland
					</p>
				</section>
				<section className={styles.openToWork}>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="8" height="8" rx="4" fill="#10B981"/>
					</svg>
					<p>
						Opent to work
					</p>
				</section>
				<section className={styles.socialMedias}>
					<a href="https://github.com/Andramed" target='blank'>
						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 21V17C13.1392 15.7473 12.78 14.4901 12 13.5C15 13.5 18 11.5 18 8C18.08 6.75 17.73 5.52 17 4.5C17.28 3.35 17.28 2.15 17 1C17 1 16 1 14 2.5C11.36 2 8.64004 2 6.00004 2.5C4.00004 1 3.00004 1 3.00004 1C2.70004 2.15 2.70004 3.35 3.00004 4.5C2.27191 5.51588 1.91851 6.75279 2.00004 8C2.00004 11.5 5.00004 13.5 8.00004 13.5C7.61004 13.99 7.32004 14.55 7.15004 15.15C6.98004 15.75 6.93004 16.38 7.00004 17V21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>
					<a href="https://www.linkedin.com/in/cervac-vlad-829613270" target="_blank" rel="noopener noreferrer">
						<svg fill="#289af0" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 455 455" >

							<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

							<g id="SVGRepo_iconCarrier"> <g> <path  d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/> <path  d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z"/> </g> </g>

						</svg>
					</a>
					<a href="mailto:cervacvlad32@gmail.com">
						<svg fill="#000000"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
							<g id="7935ec95c421cee6d86eb22ecd11f972">
							<path  d="M511.5,446.753V65.247H0.5v381.506H511.5L511.5,446.753
									L511.5,446.753z M438.245,368.552v74.224H79.53v-70.247h0.615l1.816-0.605l134.664-108.435l40.74,34.519l36.176-31.78
									L438.245,368.552L438.245,368.552L438.245,368.552z M438.245,355.428l-137.114-95.917l137.114-118.819V355.428L438.245,355.428
									L438.245,355.428z M415.453,69.215L396.898,86.93l-8.811,8.569l-8.205,8.532l-8.514,7.944l-7.898,7.945l-7.6,7.33l-7.004,7.33
									l-7.294,6.725l-6.688,6.725l-12.462,12.519l-11.867,11.298l-5.457,5.197l-4.871,5.188l-5.16,4.285l-4.574,4.266l-8.195,7.954
									l-3.959,3.354l-3.344,3.371l-3.344,2.72l-2.748,3.074l-5.16,4.284l-2.123,1.509l-1.527,1.845l-1.816,0.912l-1.221,1.229
									l-1.518,1.211L101.102,68.609L415.453,69.215L415.453,69.215L415.453,69.215z M208.727,256.764L79.53,360.001l0.298-212.893
									L208.727,256.764L208.727,256.764L208.727,256.764z">
							</path>
							</g>
						</svg>
					</a>
				</section>
			</section>
			<section className={styles.animation}>
				<img src={photo} alt="photo" />
			</section>
		</div>
		<Skills/>
		<AboutMe />
		<Projects/>
		<CV/>
	</main>
  )
}
export default Home