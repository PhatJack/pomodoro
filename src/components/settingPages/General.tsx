import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useThemeContext } from '../../hooks/useThemeContext'


const General = () => {

	const options = [
		{
			name: "Tokyo Sakura",
			value: "TokyoSakura"
		},
		{
			name: "Aesthetic Cafeteria",
			value: "AestheticCafeteria"
		},
		{
			name: "Neon City",
			value: "NeonCity"
		},
		{
			name: "Galaxy",
			value: "Galaxy"
		},
		{
			name: "Rainy Day",
			value: "RainyDay"
		},
		{
			name: "Life Goes On",
			value: "LifeGoesOn"
		},
	]

	const [state, dispatch] = useThemeContext()
	return (
		<div className="flex flex-col pb-3">
			<div className="flex flex-col gap-3">
				<label htmlFor="mainBg" className='text-2xl'>Background:</label>
				<select
					name=""
					id="mainBg"
					value={`${localStorage.getItem("imageBg")}`}
					className='bg-transparent border px-4 py-2 appearance-none relative w-full focus:ring-2 ring-gray-500'
					onChange={(event) => {
						dispatch({ type: "TOGGLEBACKGROUND", value: event.target.value })
						localStorage.setItem("imageBg", event.target.value)
					}
					}
				>
					{options.map((item, index) => (
						<option className='text-white bg-black/95' value={item.value}>{item.name}</option>
					))}
				</select>
				<BsChevronDown size={18} className="absolute text-white top-[27%] right-12" />
			</div>
			<p
				className='mt-4 text-sm text-gray-400'
			>Have feature requests, or an issue to report? Fill out our <span className='underline underline-offset-4 cursor-pointer'>quick feedback form here </span>
				and join our <span className='underline underline-offset-4 cursor-pointer'>Discord Community.</span>
			</p>
			<p
				className='my-5 text-sm text-gray-400'
			>StudyWithMe is not related to the Pomodoro Technique™ trademark holder Cirillo Company and respects its trademarks. Pomodoro Technique® and Pomodoro® are registered trademarks of Francesco Cirillo.</p>
		</div>
	)
}

export default General