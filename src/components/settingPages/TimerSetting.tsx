import React, { useState, ChangeEvent, useEffect } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import Setting from '../Setting';

interface TimerItem {
	title: string;
	key: keyof typeof defaultInputValues;
}

const defaultInputValues = {
	pomodoro: "25",
	short: "5",
	long: "10"
};

// Define the handleResetDefaults function

const TimerSetting: React.FC = () => {

	const [state] = useThemeContext();

	const pomodoroTimer: TimerItem[] = [
		{
			title: "Pomodoro",
			key: "pomodoro"
		},
		{
			title: "Short Break",
			key: "short"
		},
		{
			title: "Long Break",
			key: "long"
		}
	];

	const [inputValues, setInputValues] = useState<typeof defaultInputValues>(() => {
		const storedValues: typeof defaultInputValues = {
			pomodoro: localStorage.getItem("pomodoro") || defaultInputValues.pomodoro,
			short: localStorage.getItem("short") || defaultInputValues.short,
			long: localStorage.getItem("long") || defaultInputValues.long
		};
		return storedValues;
	});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>, key: keyof typeof defaultInputValues) => {
		const { value } = event.target;
		setInputValues((prevValues) => ({
			...prevValues,
			[key]: value
		}));
		localStorage.setItem(key, value);
	};

	return (
		<div className='flex flex-col pb-5 gap-4 h-full'>
			<div className="flex flex-row justify-between items-start gap-1 overflow-hidden">
				{pomodoroTimer.map((item, index) => (
					<div className="flex flex-col" key={index}>
						<span className="block text-lg text-white">{item.title}</span>
						<input
							type="number"
							name={item.title}
							id={item.title}
							value={inputValues[item.key]}
							onChange={(event) => handleInputChange(event, item.key)}
							className='w-[85%] my-2 border-2 text-lg border-gray-400 rounded-md px-3 py-1 bg-black'
						/>
						<label htmlFor={item.title} className='text-gray-400 text-sm'>
							minutes
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default TimerSetting
