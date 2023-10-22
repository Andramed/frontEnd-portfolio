import React from 'react'
import styles from '../Project/Project.module.scss'
interface Description {
	title: string,
	overview: string,
	coreFeatures: string[],
	chalengesLearning: string[]
}

interface ProjectProps {
	projectLink: string,
	demoProject: string,
	descriptionsProject: Description,
	repoLink: string,
	usedTechNologies: React.ReactElement[],

}

const Project: React.FC<ProjectProps> = ({
	projectLink, 
	demoProject,
	descriptionsProject,
	repoLink,
	usedTechNologies}) => {
		let styleUsedTech = usedTechNologies.length >= 5 ? 'usedTech' : 'minUsedTech'
	return (
		<div className={styles.container} >
			<a href={projectLink} target="_blank" rel="noopener noreferrer"><img src={demoProject} alt={descriptionsProject.title} /></a>
			<section className={styles.descriptions}>
				<h3>{descriptionsProject.title}</h3>
				<p>
					{descriptionsProject.overview}
				</p>
				<h6>Core Features:</h6>
				<ul className={styles.listContent}>
					{
						descriptionsProject.coreFeatures.map((content:string, index:number) => {
							const [boldPart, regularPart] = content.split(/:(.+)/);
							return (
								<li key={index}>
									<span>{boldPart}:</span>
									{regularPart}
								</li>
							)
						})
					}
				</ul>
				<h6>Used technologies: </h6>
				<ul className={styles[styleUsedTech]}>
					{	
						usedTechNologies.map((technologie: React.ReactElement, index: number) => <li key={index}>{technologie}</li>)
					}
				</ul>
				<h6>
					Challenges & Learnings:
				</h6>
				<ul className={styles.challenge}>
					{
						descriptionsProject.chalengesLearning.map((chalenge:string, index:number) => {
							const [boldPart, regularPart] = chalenge.split(/:(.+)/);
							return (
								<li key={index}>
									<span>{boldPart}:</span>{regularPart}
								</li>
							)
						})
					}
				</ul>
				<ul className={styles.links}>
					<li>
						<a href={repoLink} target="_blank" rel="noopener noreferrer">Repositorie</a>
					</li>
					<li>
						<a href={projectLink} target="_blank" rel="noopener noreferrer">Live Project</a>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default Project