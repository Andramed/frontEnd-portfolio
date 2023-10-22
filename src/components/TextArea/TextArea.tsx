import React, { useState } from 'react'
import styles from './TextArea.module.scss'

interface TextAreaProps {
	placeHolder: string,
	type: string,
	handleMessage: (value:object) => void
}

const TextArea: React.FC<TextAreaProps> = ({placeHolder, type, handleMessage}) => {
	
  return (
	<div className={styles.inputGroup}>
		<textarea onChange={(e) => handleMessage({[e.target.name]: e.target.value})}  required name="message" id="message" typeof={type} cols={30} rows={2}></textarea>
		<label htmlFor="message">{placeHolder}</label>
	</div>
  )
}

export default TextArea
