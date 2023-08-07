import { createContext, useMemo, useReducer, } from "react";
import React from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null);

ThemeContext.displayName = "ThemeContext";

export interface UIState {
	grid_view: boolean;
	isLoading: boolean;
	category: string;
	sorting_value: string;
}

export type UIAction =
	| { type: "SET_GRIDVIEW"; value: boolean }
	| { type: "IS_LOADING"; value: boolean }
	| { type: "CATEGORY"; value: string }
	| { type: "GET_SORT_VALUE"; value: string };

export interface ThemeContextType {
	state: UIState;
	dispatch: React.Dispatch<UIAction>;
}

const initalState: UIState = {
	grid_view: true,
	isLoading: false,
	category: "freshflower",
	sorting_value: "ascending"
}

const reducer = (state: UIState, action: UIAction) => {
	switch (action.type) {
		case "SET_GRIDVIEW":
			return {
				...state,
				grid_view: action.value
			};
		case "IS_LOADING":
			return {
				...state,
				isLoading: action.value
			}
		case "CATEGORY":
			return {
				...state,
				category: action.value
			}
		case "GET_SORT_VALUE":
			return {
				...state,
				sorting_value: action.value
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