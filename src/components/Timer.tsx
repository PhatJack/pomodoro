import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';
import CountdownAnimation from './CountdownAnimation';

const Timer: React.FC = () => {

	let [state, dispatch] = useThemeContext();

	let [minutes, setMinutes] = useState<number>(state.minute);
	let [seconds, setSeconds] = useState<number>(state.second);

	console.log(minutes, seconds)

	useEffect(() => {
		setMinutes(state.minute);
		setSeconds(state.second);
	}, [state.minute, state.second]);

	useEffect(() => {
		let timerInterval: number;

		if (state.startCounting && state.stopCounting == false) {
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

		return () => {
			window.clearInterval(timerInterval); // Clean up the interval on component unmount
		};
	}, [state.startCounting, minutes, seconds]);


	const children = () => {
		const formattedSeconds = seconds.toString().padStart(2, '0');
		return `${minutes}:${formattedSeconds}`;
	}

	return (
		<div className="text-[75px] my-6 font-bold text-white rounded-full shadow-xl">
			<CountdownAnimation key={1}>
				{children}
			</CountdownAnimation>
		</div>
	);
};

export default Timer;
