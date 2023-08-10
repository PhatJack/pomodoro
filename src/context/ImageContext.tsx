import { createContext } from "react";
import React from 'react'

const ImageContext = createContext<string | null>(null);

// export const ImageProvider = ({ children }: { children: React.ReactNode }) => {

// 	return (
// 		<ImageContext.Provider value={`/src/assets/${}`}>
// 			{children}
// 		</ImageContext.Provider>
// 	)
// }

export { ImageContext }