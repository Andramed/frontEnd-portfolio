import React from 'react'
import CVPreview from './components/CVPreview'
import GetInTouch from './components/GetInTouch'
import styles from '../CV/CV.module.scss'
const CV: React.FC = () => {
  return (
	<section className={styles.container} id='cv'>
		<div className={styles.wraper}>
			<CVPreview/>
			<GetInTouch/>
		</div>
	</section>
  )
}

export default CV