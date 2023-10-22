import React, { Component } from 'react'
import styles from '../Skill/Skill.module.scss'
import stylesFromSkills from '../../Skills.module.scss'
interface SkillProps {
	
	
	logoSkills: React.ReactElement[],
	nameCompartiment: string
}

 const Skill: React.FC<SkillProps> = ({   logoSkills, nameCompartiment }) => {
  return (
	<div className={stylesFromSkills.skill}>
					<h4>{nameCompartiment}</h4>
					<div>
						{/* <img src={logoPorgraminglanguage} alt="logo" /> */}
						<div className={stylesFromSkills.programingLanguage}>
						
							{logoSkills.map((Component, index) => (
								<div className={styles.logoSkill} key={index}>
									{Component}
								</div>
							))}
						</div>
					</div>
				</div>
  )
}
export default Skill