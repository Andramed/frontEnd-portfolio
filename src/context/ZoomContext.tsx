
import React, { createContext, useState } from 'react';

type ZoomContextType = {
	isZoomed: boolean,
	setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>;
}

type ZoomProviderProps = {
	children: React.ReactNode;
}

const ZoomContext = createContext<ZoomContextType | null>(null);

export const ZoomProvider: React.FC<ZoomProviderProps> = ({children}) => {
	const [isZoomed, setIsZoomed] = useState<boolean>(false)
	return (
		<ZoomContext.Provider value={{isZoomed, setIsZoomed}}>
			{children}
		</ZoomContext.Provider>
	)
}

export default ZoomContext;