import React, { useState } from 'react'
import { RiListSettingsLine } from 'react-icons/ri'
import { VscDebugRestart } from 'react-icons/vsc'
import Timer from './Timer'
import { useThemeContext } from '../hooks/useThemeContext'


const Tags = () => {

	const [activeTag, setActiveTag] = useState(0)

	const [state, dispatch] = useThemeContext();

	const handleTagClick = (index: number) => {
		setActiveTag(index)
	}

	return (
		<div className='flex flex-col justify-between items-center'>
			<div className="pomodoro-duration flex w-full justify-between items-center gap-3 h-[4em]">
				{["Pomodoro", "Short Break", "Long Break"].map((item, index) => (
					<button
						key={index}
						className={`px-5 py-3 border-2 text-white text-lg font-semibold transition-all ${activeTag != index ? 'bg-transparent' : 'bg-white !text-black'
							} rounded-md`}
						onClick={() => { handleTagClick(index) }}
					>
						{item}
					</button>
				))}
			</div>
			<Timer />
			<div className="flex justify-between items-center gap-5">
				<button className='text-xl text-black font-semibold px-6 py-2 border bg-white rounded-md'
					onClick={() => { dispatch({ type: "START", value: true }) }}
				>Start</button>
				<button onClick={() => { dispatch({ type: "STOP", value: true }) }}>
					<VscDebugRestart size={30} className="text-white" />
				</button>
				<button>
					<RiListSettingsLine size={35} className="text-white" />
				</button>
			</div>
		</div>
	)
}

export default Tags