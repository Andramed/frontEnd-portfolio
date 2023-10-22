import React from 'react'
import Project from './components/Project'
import topPhoneDemo from '../../../../images/projectDemo/Captură de ecran 2023-09-28 102229.png';
import gamePigDemo from '../../../../images/projectDemo/gamePig.png'
import tributPageDemo from '../../../../images/projectDemo/tributPageDemo.png';

import { SVGCSS, SVGHTML, SVGJavscrpit, SVGMongoDb, SVGNext, SVGNodeJs, SVGReact, SVGSaas, SVGTaillwid, } from '../SVG/SVG';
import styles from '../Projects/Pojects.module.scss'


 const Projects: React.FC = () => {
	return (
		<section id='projects' className={styles.containerProjects}>
				<Project 
				projectLink='https://reactors-project-9sic-a41fqt1q2-andramed.vercel.app/' 
				demoProject={topPhoneDemo}
				descriptionsProject={
					{
						title: 'E-Commerce Platform',
						overview: 'An advanced e-commerce platform designed to provide users with an intuitive shopping experience. Built with scalability and user experience in mind, this platform incorporates a range of features essential for modern online shopping.',
						coreFeatures: [
							'User Authentication: Secure sign up and sign in processes, ensuring data protection and user identity validation.',
							'Product Management: Allows users to seamlessly add, update, and manage their products on the platform.',
							'Product Filtering & Sorting: Advanced filters for product categories, prices, and ratings, along with sorting capabilities for relevance, popularity, and newest additions',
							'Contact Emailer: Integrated email system enabling users to reach out for inquiries or support directly from the platform.'
						],
						chalengesLearning: [
							'Database Integration: Integrating the MongoDB database required in-depth understanding and collaboration.',
							'Time Management: With a project of this magnitude and in a team setting, effectively managing time was paramount.',
							'Collaborative Decisions: Reconciling different visions and ideas from team members and coming to a consensus was a significant learning curve.',
							'Tailwind & Next.js: Implementing Tailwind for styling and Next.js for server-side rendering was a deep dive into modern web technologies, enhancing our proficiency in these tools',
							'Deepening ReactJS Knowledge: This project acted as a catalyst in solidifying our understanding of ReactJS, its best practices, and the potential it offers in web development.'

						]
					}
				}
				repoLink='https://github.com/Andramed/reactors-project'
				usedTechNologies={
					[<SVGMongoDb/>, <SVGNext/>, <SVGReact/>, <SVGJavscrpit/>, <SVGNodeJs/>, <SVGTaillwid/>, <SVGSaas/>]
				}
			/>
			<Project 
				projectLink='https://andramed.github.io/gamePig/' 
				demoProject={gamePigDemo}
				descriptionsProject={
					{
						title: 'Interactive game for two players',
						overview: 'JavaScript project This is an interactive game for two players where each player takes turns rolling a die until they roll a one or press a "stop" button. If a player presses the "stop" button, their accumulated score is saved and the turn passes to the other player. If a player rolls a one, their current score is set to zero and their turn ends. The goal of the game is for a player to accumulate 100 points. The first player to reach this score is the winner.',
						coreFeatures: [
							
							'User Interface (UI): A game screen displaying the current scores of both players.A game screen displaying the current scores of both players.',
							"Game Logic: Randomly generating the result of rolling the die (from 1 to 6).",
							"Score Management: Displaying the total score for each player on the screen",
							"Handling Rounds: Moving to the next player after each round."
						],
						chalengesLearning: [
							'Game State Management: Keeping track of the game state, including player scores, the current player, and round state, can be complex.',
							'User Interface (UI):  Choosing colors, design, and organizing UI elements requires careful planning and attention to detail.',
							'Game Logic:  Correctly implementing the game rules, including score manipulation, detecting win conditions, and ending rounds, may require rigorous testing.',
							'User Event Handling: Managing click or button press events to control player actions can be complex.',
							'Testing and Debugging:  Identifying and fixing errors and bugs can be challenging. Thorough testing of the game is crucial.'
						]
					}
				}
				repoLink='hhttps://github.com/Andramed/gamePig#handling-rounds'
				usedTechNologies={
					[<SVGHTML/>, <SVGJavscrpit/>, <SVGCSS/>]
				}
			/>
			<Project 
				projectLink='https://andramed.github.io/tributePage/' 
				demoProject={tributPageDemo}
				descriptionsProject={
					{
						title: 'Tribut page',
						overview: 'The primary objective of the Tribute Page project is to create a personalized web application that pays tribute to a person or chosen subject, aligning with a specific set of user stories and requirements. This project is designed to showcase your skills and accomplishments, especially since it was one of my initial projects created in accordance with the technical requirements provided by FreeCodeCamp. This initiative reflects the desire to explore and become familiar with structuring and styling a basic web page in a coherent and concrete manner. ',
						coreFeatures: [
							'Responsive Design: Implement a responsive layout that adapts to different screen sizes, including mobile devices and larger desktop screens.',
							'Text Formatting: Use HTML and CSS to format text, headings, and paragraphs for a polished appearance.',
							"Links:  Include links to external sources or related content, such as articles or additional information about the person you're paying tribute to.",
						],
						chalengesLearning: [
							"Responsiveness: Ensuring that the page looks and functions well on different devices and screen sizes can be challenging. You'll need to use CSS media queries to adapt your page layout.",
							"Design Consistency: Maintaining a consistent and visually appealing design across various sections of your page can be tricky, especially if you're new to web design.",
						]
					}
				}
				repoLink='https://github.com/Andramed/tributePage'
				usedTechNologies={
					[<SVGHTML/>, <SVGCSS/>]
				}
			/>
		</section>
	)
}

export default Projects
