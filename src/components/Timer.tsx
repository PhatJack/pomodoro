import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';
import { ThemeContext } from '../context/ThemeContext';
import CountdownAnimation from './CountdownAnimation';

const Timer: React.FC = () => {
	const [state, dispatch] = useThemeContext();
	const [minutes, setMinutes] = useState<number>(state.minute);
	const [seconds, setSeconds] = useState<number>(state.second);

	useEffect(() => {
		let timerInterval: number;

		if (state.startCounting) {
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

	const children = ({ remainingTime }: { remainingTime: number }) => {
		return `${minutes}:${seconds}`
	}

	return (
		<div className="text-6xl my-6 font-semibold text-white">
			<CountdownAnimation key={1}>
				{children}
			</CountdownAnimation>
		</div>
	);
};

export default Timer;
