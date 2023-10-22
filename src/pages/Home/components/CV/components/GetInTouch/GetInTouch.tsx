import React, { useState } from 'react';
import styles from '../GetInTouch/GetInTouch.module.scss'
import Input from '../../../../../../components/Input';
import TextArea from '../../../../../../components/TextArea';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import Alert, {AlertColor} from '@mui/material/Alert';
import { green, red } from '@mui/material/colors';
const GetInTouch = () => {

	const [formData, setFormData] = useState< object >({});
	const [isSendedMail, setIsSendedMail] = useState<boolean>(false);
	const [messageSnackBar, setMessageSnackBar] = useState<string>('');
	const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
		e.preventDefault();
		console.log(formData);
		try {
			const response = await axios.post('http://localhost:3001/send-email', formData )
			const data = response.data
			if (data) {
				setIsSendedMail(true);
				setMessageSnackBar(data.message)
				setSeverity("success")
			}
		} catch (error) {
			console.log('eror to send post request to server error: ', error);
			setIsSendedMail(true);
			setMessageSnackBar('Error email not sended try again');
			setSeverity("error");
		}
		
	}
	const handleCloseSnackBar = () => {
		console.log('hanlde close snack bar');
		
		setIsSendedMail(false)
	}
	const handleInput = (value: object) => {
		setFormData((prev) => ({
			...prev,
			...value
		}))
	}
  return (
	<>
		<div id='#contact' className={styles.container}>
			<p>
				What’s next? Feel free to reach out to me if you're looking for a developer, 
				have a query, or simply want to connect.
			</p>
			<form onSubmit={(e) => handleSubmit(e)}> 
				<Input handleInput={handleInput}  placeHolder='Name' type='text' />
				<Input handleInput={handleInput} placeHolder='Email' type='email' />
				<TextArea handleMessage={handleInput}  placeHolder='Message' type='tex' />
				<button className={styles.btnSubmit}>submit</button>
			</form>
		</div>
		{
			isSendedMail && <Snackbar
				open={true}
				autoHideDuration={6000}
				onClose={handleCloseSnackBar}
			>
				<Alert onClose={handleCloseSnackBar} severity={severity} 
					sx={{	
						bgcolor: `${severity == "success" ? green[400] : red[400]}`,
						color: 'white'
					}}>
					{messageSnackBar}
				</Alert>
			</Snackbar>
		}
	</>
  )
}

export default GetInTouch