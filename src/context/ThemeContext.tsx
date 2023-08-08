import { createContext, useMemo, useReducer, } from "react";
import React from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null);

ThemeContext.displayName = "ThemeContext";

export interface UIState {
	minute: number;
	second: number;
	startCounting: boolean;
	stopCounting: boolean;
	restart: number;
}

export type UIAction =
	| { type: "MINUTES"; value: number }
	| { type: "SECOND"; value: number }
	| { type: "START"; value: boolean }
	| { type: "STOP"; value: boolean }
	| { type: "RESTART"; value: number }

export interface ThemeContextType {
	state: UIState;
	dispatch: React.Dispatch<UIAction>;
}

const initalState: UIState = {
	minute: 25,
	second: 0,
	startCounting: false,
	stopCounting: false,
	restart: 25
}

const reducer = (state: UIState, action: UIAction) => {
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
		case "START":
			return {
				...state,
				startCounting: action.value
			}
		case "STOP":
			return {
				...state,
				stopCounting: action.value
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