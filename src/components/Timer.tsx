import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';

const Timer: React.FC = () => {

	let [state, dispatch] = useThemeContext();

	let [minutes, setMinutes] = useState<number>(0);
	let [seconds, setSeconds] = useState<number>(state.second);

	// console.log(minutes, seconds)

	useEffect(() => {
		if (state.timeKind === "pomodoro") {
			setMinutes(state.pomodoro);
		} else if (state.timeKind === "short") {
			setMinutes(state.shortBreak);
		} else if (state.timeKind === "long") {
			setMinutes(state.longBreak);
		}
		setSeconds(state.second);

	}, [state.timeKind, state.pomodoro, state.shortBreak, state.longBreak,state.second]);

	useEffect(() => {
		let timerInterval: number;

		if (state.toggleOnOff) {
			timerInterval = window.setInterval(() => {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				} else {
					if (minutes > 0) {
						setMinutes(minutes - 1);
						setSeconds(59);
					} else {
						window.clearInterval(timerInterval); // Stop the timer when it reaches 0
					}
				}
			}, 1000);
		}
		document.title = `${minutes}:${seconds.toString().padStart(2, '0')} | Pomodoro Timer | Study Focus`
		return () => {
			window.clearInterval(timerInterval); // Clean up the interval on component unmount
		};
	}, [state.toggleOnOff, minutes, seconds]);

	const formattedSeconds = seconds.toString().padStart(2, '0');
	const timerText = `${minutes}:${formattedSeconds}`;
	return (

		<div className="text-[75px] my-6 font-bold text-white rounded-full shadow-xl">
			{timerText}
		</div>
	);
};

export default Timer;
