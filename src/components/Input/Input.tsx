import React, { useState } from 'react'
import styles from './input.module.scss'

interface InputProps {
	placeHolder: string,
	type: string,
	handleInput: (value: object) => void
};


const Input: React.FC<InputProps> = ({placeHolder, type, handleInput}) => {
	
  return (
	<div className={styles.inputGroup}>
		<input onChange={(e) => handleInput({[e.target.name]: e.target.value})} required={true} type={type} name={placeHolder.toLowerCase()} id={placeHolder.toLowerCase()} />
		<label htmlFor={placeHolder.toLowerCase()}>{placeHolder}</label>
	</div>
  )
}

export default Input
