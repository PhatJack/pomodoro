import React from 'react'
import { BsChevronDown } from 'react-icons/bs'


const General = () => {
	return (
		<div className="flex flex-col pb-3">
			<div className="flex flex-col gap-3">
				<label htmlFor="mainBg" className='text-2xl'>Background:</label>
				<select name="" id="mainBg" defaultValue={"TokyoSakura"} className='bg-transparent border px-4 py-2 appearance-none relative w-full focus:ring-2 ring-gray-500'>
					<option className='text-white bg-black/95' value="TokyoSakura" selected>Tokyo Sakura</option>
					<option className='text-white bg-black/95' value="AestheticCafeteria">Aesthetic Cafeteria</option>
					<option className='text-white bg-black/95' value="NeonLightCity">NeonLight City</option>
					<option className='text-white bg-black/95' value="RainyDay">Rainy Day</option>
					<option className='text-white bg-black/95' value="Universe Galaxy">Universe Galaxy</option>
					<BsChevronDown size={25} className="absolute text-white top-1/2 right-0" />
				</select>
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