import { createContext, useMemo, useReducer, } from "react";
import React from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null);

ThemeContext.displayName = "ThemeContext";

export interface TimeState {
	minute: number;
	second: number;
	toggleOnOff: boolean;
	restart: boolean;
}

export type TimeAction =
	| { type: "MINUTES"; value: number }
	| { type: "SECOND"; value: number }
	| { type: "TOGGLEOF"; value: boolean }
	| { type: "RESTART"; value: boolean }

export interface ThemeContextType {
	state: TimeState;
	dispatch: React.Dispatch<TimeAction>;
}

const initalState: TimeState = {
	minute: 25,
	second: 0,
	toggleOnOff: false,
	restart: false
}

const reducer = (state: TimeState, action: TimeAction) => {
	switch (action.type) {
		case "MINUTES":
			return {
				...state,
				minute: action.value
			};
		case "SECOND":
			return {
				...state,
				second: action.value
			}
		case "TOGGLEOF":
			return {
				...state,
				toggleOnOff: action.value
			}
		case "RESTART":
			return {
				...state,
				restart: action.value
			}
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
}


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

	const [state, dispatch] = useReducer(reducer, initalState);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);


	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}