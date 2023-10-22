import React, { ReactNode, useContext } from 'react';
import Navbar from './components/Navbars';
import Footer from './components/Footer';
import ZoomContext from './context/ZoomContext';
import CVPreviewFullScreen from './pages/Home/components/CV/components/CVPrevieFullScreen';

interface LayoutProps {
	children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
	const context = useContext(ZoomContext);
	if (!context) {
		throw new Error("Context null");
		
	}
	const {isZoomed} = context
	return (
		isZoomed ? 
			(<CVPreviewFullScreen/>):
			<div className='layout'>
				<Navbar/>
				{children}
				<Footer/>
			</div>
	)
}

export default Layout