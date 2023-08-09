import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import General from './settingPages/General';
import Timer from './settingPages/Timer';
import Sound from './settingPages/Sound';
interface SettingProps {
	setting: boolean;
	onSettingChange: () => void;
}

const Setting: React.FC<SettingProps> = ({ setting, onSettingChange }) => {

	const [activeLiTag, setActiveLiTag] = useState<number>(0);

	const handleActiveLiTag = (index: number) => {
		setActiveLiTag(index)
	}

	const resetNotification = () => toast("All Setting have been reset!")

	const menuSetting = [
		{
			name: "General",
			layout: General
		},
		{
			name: "Timer",
			layout: Timer
		},
		{
			name: "Sounds",
			layout: Sound
		},
		{
			name: "Sign In"
		}
	]

	return (
		<div className={`absolute left-1/2 -translate-x-1/2 z-20 bg-black transition-all duration-500 rounded-lg ${setting ? 'top-20 opacity-100' : '-top-[25%] opacity-0'}`}>
			<div className="px-10 pt-16 pb-8">
				<div className="flex w-full flex-col">
					<div className="flex flex-row items-start justify-center pb-5">
						<ul className='flex flex-col gap-6 text-white font-semibold font-mono text-lg justify-center items-start h-full pr-8 pt-1'>
							{menuSetting.map((item, index) => (
								<li
									key={index}
									className={`${activeLiTag != index ? '' : 'underline underline-offset-8'} transition-all duration-200 cursor-pointer`}
									onClick={() => {
										handleActiveLiTag(index)
									}}
								>{item.name}</li>
							))}
						</ul>
						<div className="pl-8 font-mono font-semibold text-white flex flex-col w-[480px] h-full">
							{
								menuSetting.map((item, index) => (
									<div key={index} className="">
										{activeLiTag === index && item.layout && <item.layout />}
									</div>
								))
							}
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
					<div className="flex justify-between items-center">
						<button
							className='px-5 py-3 border-2 border-red-400 rounded-lg text-red-400 font-mono transition-all hover:bg-red-400 hover:text-white'
							onClick={resetNotification}
						>Reset All</button>
						<button
							className='px-5 py-3 border-2 border-white rounded-lg text-white font-mono transition-all hover:bg-white hover:text-black'
							onClick={() => {
								onSettingChange();
								toast("Save changes successfully!")
							}}
						>Save Changes</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
