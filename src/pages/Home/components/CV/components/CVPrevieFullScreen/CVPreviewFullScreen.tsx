import React, { useEffect, useRef, useContext } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import styles from '../CVPrevieFullScreen/CVPreviewFullScreen.module.scss'
import cvFile from '../../cv.pdf';
import ZoomContext from '../../../../../../context/ZoomContext';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();
 

const CVPreviewFullScreen: React.FC = () => {
	const context = useContext(ZoomContext);
	if (!context) {
		throw new Error("useContext must be used within ZoomProvider");	
	};

	const {isZoomed, setIsZoomed} = context
	
	console.log(isZoomed);
	
	const handleSave = (e:React.MouseEvent) => {
	
		console.log('save');
		
	}
  return (
	<div   className={styles.container}>
		<div>
			<Document    file={cvFile}>
				<Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}></Page>
			</Document>
		</div>
		<div className={styles.containerBtns} >
			<button className={styles.btnClose} onClick={()=> {
				setIsZoomed(false);
				console.log('change state');
				
			}}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path  d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<button onClick={(e) => handleSave(e)} className={styles.btnSave}>
				<a download='CervacVladCV.pdf' title='download CV pdf' href={cvFile} target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
					</svg>
				</a>
			</button>
		</div>
	</div>
  )
}

export default CVPreviewFullScreen