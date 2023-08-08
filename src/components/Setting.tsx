import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs'

interface SettingProps {
	setting: boolean;
	onSettingChange: () => void;
}

const Setting: React.FC<SettingProps> = ({ setting, onSettingChange }) => {

	const [activeLiTag, setActiveLiTag] = useState<number>(0);

	const handleActiveLiTag = (index: number) => {
		setActiveLiTag(index)
	}

	const menuSetting = [
		{
			name: "General"
		},
		{
			name: "Timer"
		},
		{
			name: "Sounds"
		},
		{
			name: "Sign In"
		}
	]

	return (
		<div className={`absolute left-1/2 -translate-x-1/2 z-20 bg-black transition-all duration-500 rounded-lg ${setting ? 'top-20 opacity-100' : '-top-[25%] opacity-0'}`}>
			<div className="p-10 ">
				<div className="flex w-full">
					<div className="flex flex-row items-center">
						<ul className='flex flex-col gap-6 text-white font-semibold font-mono text-lg h-full border-r border-gray-400 pr-8'>
							{menuSetting.map((item, index) => (
								<li
									key={index}
									className={`${activeLiTag != index ? '' : 'underline underline-offset-8'} cursor-pointer`}
									onClick={() => {
										handleActiveLiTag(index)
									}}
								>{item.name}</li>
							))}
						</ul>
						<div className="pl-8 font-mono font-semibold text-white flex flex-col w-[480px]">
							<div className="flex flex-col">
								<div className="flex flex-col gap-3">
									<label htmlFor="mainBg" className='text-2xl'>Background:</label>
									<select name="" id="mainBg" className='bg-transparent border px-4 py-2 appearance-none relative w-full focus:ring-2 ring-gray-500'>
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
						</div>
						<button
							onClick={onSettingChange}
							className='absolute top-5 right-5'
						>
							<AiOutlineClose
								size={30}
								className="text-white hover:-rotate-[360deg] rotate-0 transition-all duration-300"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
