import { createContext, useMemo, useReducer, } from "react";
import React from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null);

ThemeContext.displayName = "ThemeContext";

export interface TimeState {
	pomodoro: number;
	shortBreak: number;
	longBreak: number;
	second: number;
	toggleOnOff: boolean;
	restart: boolean;
	mainBg: string;
	timeKind: string;
	audio: string;
}

export type TimeAction =
	| { type: "POMODORO"; value: number }
	| { type: "SHORT"; value: number }
	| { type: "LONG"; value: number }
	| { type: "SECOND"; value: number }
	| { type: "TOGGLEOF"; value: boolean }
	| { type: "RESTART"; value: boolean }
	| { type: "TOGGLEBACKGROUND"; value: string }
	| { type: "KIND"; value: string }
	| { type: "SOUND", value: string }

export interface ThemeContextType {
	state: TimeState;
	dispatch: React.Dispatch<TimeAction>;
}

const pomodoroValue = localStorage.getItem("pomodoro") || "25";
const shortValue = localStorage.getItem("short") || "5";
const longValue = localStorage.getItem("long") || "10";

const initalState: TimeState = {
	pomodoro: parseInt(pomodoroValue),
	shortBreak: parseInt(shortValue),
	longBreak: parseInt(longValue),
	second: 0,
	toggleOnOff: false,
	restart: false,
	mainBg: "TokyoSakura",
	timeKind: "pomodoro",
	audio: "bell"
}

const reducer = (state: TimeState, action: TimeAction) => {
	switch (action.type) {
		case "POMODORO":
			return {
				...state,
				pomodoro: action.value
			}
		case "SHORT":
			return {
				...state,
				shortBreak: action.value
			};
		case "LONG":
			return {
				...state,
				longBreak: action.value
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
		case "TOGGLEBACKGROUND":
			return {
				...state,
				mainBg: action.value
			}
		case "KIND":
			return {
				...state,
				timeKind: action.value
			}
		case "SOUND":
			return {
				...state,
				sound: action.value
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