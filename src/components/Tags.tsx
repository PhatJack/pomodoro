import React, { useState } from 'react'
import { RiListSettingsLine } from 'react-icons/ri'
import { VscDebugRestart } from 'react-icons/vsc'
import Timer from './Timer'
import { useThemeContext } from '../hooks/useThemeContext'
import Setting from './Setting'


const Tags = () => {

	const [activeTag, setActiveTag] = useState(0)
	const [setting, setSetting] = useState(false)


	const [state, dispatch] = useThemeContext();

	const handleOpenSetting = () => {
		setSetting(!setting)
	}

	const handleTagClick = (index: number) => {
		setActiveTag(index)
	}

	console.log(setting)

	const menu = [
		{
			name: "Pomodoro",
			time: 25,

		},
		{
			name: "Short Break",
			time: 5
		},
		{
			name: "Long Break",
			time: 10
		}
	]

	return (
		<div className='flex flex-col justify-between items-center'>
			<div className="pomodoro-duration flex w-full justify-between items-center gap-3 h-[4em]">
				{menu.map((item, index) => (
					<button
						key={index}
						className={`px-5 py-3 border-2 text-white text-lg font-semibold transition-all ${activeTag != index ? 'bg-transparent' : 'bg-white !text-black'
							} rounded-md`}
						onClick={() => {
							handleTagClick(index);
							dispatch({ type: "MINUTES", value: item.time });
							dispatch({ type: "TOGGLEOF", value: false })
						}}
					>
						{item.name}
					</button>
				))}
			</div>
			<Timer />
			<div className="flex justify-between items-center gap-5">
				<button className='text-xl text-black font-semibold px-6 py-2 border bg-white rounded-md'
					onClick={() => { dispatch({ type: "TOGGLEOF", value: !state.toggleOnOff }) }}
				>
					{!state.toggleOnOff ? 'Start' : 'Pause'}
				</button>
				<button onClick={() => { dispatch({ type: "RESTART", value: true }) }}>
					<VscDebugRestart size={30} className="text-white" />
				</button>
				<button onClick={handleOpenSetting}>
					<RiListSettingsLine size={35} className="text-white" />
				</button>
			</div>
			<Setting setting={setting} onSettingChange={handleOpenSetting} />
			<div
				onClick={handleOpenSetting}
				className={`${setting ? 'block opacity-100' : 'hidden opacity-0'} w-screen h-screen absolute inset-0 bg-black/20 z-10`}
			></div>
		</div>
	)
}

export default Tags