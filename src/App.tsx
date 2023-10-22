import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import Layout from './Layout';
import { ZoomProvider } from './context/ZoomContext';


function App() {
	

  return (
    <Router>
		<ZoomProvider>
			<div className='App'>
				
					
					<Layout>
						<Routes>
							<Route path='*'></Route>
							<Route path='/'  element={<Home/>}/>
						</Routes>
					</Layout>
			
			</div>
		</ZoomProvider>
	</Router>
  );
}

export default App;
