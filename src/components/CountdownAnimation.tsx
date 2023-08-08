import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; // Make sure to import TimeProps
import { useThemeContext } from '../hooks/useThemeContext';

const CountdownAnimation = ({ children }: { children: any }) => {

	const [state, dispatch] = useThemeContext();
	const [minutes, setMinutes] = useState<number>(state.minute)
	useEffect(() => {

		setMinutes(state.minute)
		
	}, [state.minute]);

	// console.log(minutes)

	return (
		<CountdownCircleTimer
			key={0}
			onComplete={() => { dispatch({ type: "TOGGLEOF", value: true }) }}
			isPlaying={state.toggleOnOff}
			initialRemainingTime={minutes * 60}
			duration={minutes * 60}
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
