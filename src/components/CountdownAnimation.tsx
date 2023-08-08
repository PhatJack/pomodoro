import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; // Make sure to import TimeProps
import { useThemeContext } from '../hooks/useThemeContext';

const CountdownAnimation = ({ children }: { children: any }) => {

	const [state, dispatch] = useThemeContext();

	return (
		<CountdownCircleTimer
			onComplete={() => { dispatch({ type: "STOP", value: true }) }}
			isPlaying={state.startCounting && state.stopCounting === false}
			duration={state.minute * 60}
			colors={"#ACFADF"}
			strokeWidth={6}
			size={250}
			trailColor="#151932"
		>
			{children}
		</CountdownCircleTimer>
	);
}

export default CountdownAnimation;
