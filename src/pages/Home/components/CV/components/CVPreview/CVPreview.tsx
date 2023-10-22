import { Page, Document, pdfjs } from 'react-pdf';
import React, { useContext, useState } from 'react';
import cvFile from '../../cv.pdf';
import styles from '../CVPreview/CVPreview.module.scss';
import CVPreviewFullScreen from '../CVPrevieFullScreen';
import ZoomContext from '../../../../../../context/ZoomContext';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();


const CVPreview: React.FC = () => {
		const context = useContext(ZoomContext);
		if (!context) {
			throw new Error("Context not avalaible");	
		}
		const {isZoomed, setIsZoomed} = context
		const zoomIn = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			if(!isZoomed){
				setIsZoomed(true)
			}
		}
		const handleSave = (e:React.MouseEvent) => {
			
		}
	return (
			<div className={styles.wraper}>
				<div className={styles.wraperAlign}>
					<div  className={` ${ styles.container}`} >
						<Document file={cvFile} className={styles.pageStyle}>
							<Page className={styles.pdf} scale={0.7} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
						</Document>
						<div className={styles.zoom}>
							<button onClick={(e) => zoomIn(e)} className={styles.btnZoom}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
								</svg>
							</button>
						</div>
					</div>
					<div className={styles.containerBtn}>
							<button onClick={(e) => zoomIn(e)} className={styles.btnZoom}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
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
			</div>
	)
}
		
	

export default CVPreview