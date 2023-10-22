import React from 'react';
import styles from '../Skills/Skills.module.scss';
import skillPhoto from '../../../../images/skills.png';
import logoPorgraminglanguage from '../../../../images/programingLanguage.png';
import Skill from './components/Skill/Skill';
import { SVGExpresJs, SVGFigma, SVGFirebase, SVGGit, SVGJavscrpit, SVGMongoDb, SVGNext, SVGNodeJs, SVGReact, SVGSaas, SVGTaillwid, SVGTypeScript } from '../SVG/SVG';

 const Skills: React.FC = () => {
  return (
	<div className={styles.wraper}>
		<section className={styles.introduction}>
			<p>
			In the <span>dinamic</span> world of tech, <span>skills</span> are valuable currency. As an aspiring full-stack developer, I've dedicated time to mastering diverse technologies in both front-end and back-end realms. Below is a concise overview of my skill set, categorized for clarity.
			</p>
			<img src={skillPhoto} alt="skills photo" />
		</section>
		<section className={styles.skills}>
			<div className={styles.wraperSkill}>
				<Skill 
					logoSkills={[<SVGTypeScript/>, <SVGJavscrpit/>]}
					nameCompartiment='Programing Language'
				 />
				 <Skill 
					nameCompartiment='Front-end Technologie'
					logoSkills={[<SVGReact/>, <SVGSaas/>, <SVGTaillwid/>, <SVGFigma/>]}
				 />
				<Skill 
					nameCompartiment='Back-end Technologie'
					logoSkills={[<SVGNext/>, <SVGNodeJs/>, <SVGExpresJs/>]}
				 />
				 <Skill 
				 	nameCompartiment='Data Base'
					logoSkills={[<SVGMongoDb/>, <SVGFirebase/>]}
				 />
				 <Skill 
				 	nameCompartiment='Version Control'
					logoSkills={[<SVGGit/>]}
				 />
			</div>
		</section>
	</div>
  )
}

export default Skills