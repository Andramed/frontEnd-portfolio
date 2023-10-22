import React from 'react'
import styles from '../AboutMe/AbouteMe.module.scss';
import mountinBiking from '../../../../images/photoAboutMe/mountainBikingnew.png'
import parasuting from '../../../../images/photoAboutMe/parasuting-removebg-preview.png'


 const AboutMe = () => {
  return (
	<section id='aboutMe' className={styles.AboutMe}>
		<p>
		<span>Curious about me? Here you have it:</span> <br />
		My passion for technology was first ignited by various 
		tech-themed movies, which painted a world where 
		innovation and creativity knew no bounds. Inspired, 
		I delved into the foundational principles of 
		programming, largely through free resources available 
		online, paving the way for my aspiration to become a 
		full-stack developer. Today, I combine my tech knowledge
		 with an adventurous spirit, enjoying activities like 
		 mountain biking, parachuting, and camping. Beyond code
		  and outdoor adventures, I believe that "learning is a
		   journey, not a destination," and am always eager to 
		   explore new frontiers in both tech and life.
		    If you're keen on collaborating or just sharing 
			thoughts, please feel free to get in touch!
		</p>
		<div>
			<img className={styles.mountinBiking} src={mountinBiking} alt="mountain bikung" />
			<img className={styles.parasuting} src={parasuting} alt="parasuting" />
		</div>
	</section>
  )
}
export default AboutMe