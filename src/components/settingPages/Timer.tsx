import React from 'react'
import { useThemeContext } from '../../hooks/useThemeContext'


const Timer = () => {

	const [state, dispatch] = useThemeContext();

	const pomodoroTimer = [
		{
			title: "Pomodoro",
			time: 25
		},
		{
			title: "Short Break",
			time: 5
		},
		{
			title: "Long Break",
			time: 10
		}
	]

	return (
		<div className='flex flex-col pb-5 gap-4 h-full'>
			<div className="flex flex-row justify-between items-start gap-1 overflow-hidden">
				{pomodoroTimer.map((item, index) => (
					<div className="flex flex-col" key={index}>
						<span className="block text-lg text-white">{item.title}</span>
						<input type="number" name="" id="timer" value={item.time} className='w-[85%] my-2 border-2 text-lg border-gray-400 rounded-md px-3 py-1 bg-black' />
						<label htmlFor="timer" className='text-gray-400 text-sm'>minutes</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default Timer