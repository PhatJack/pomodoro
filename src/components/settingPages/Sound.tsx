import React, { useRef, useState } from 'react'; // Import useRef
import { useThemeContext } from '../../hooks/useThemeContext';
import Bell from '../../assets/audio/bell.mp3';
import Birdvoice from '../../assets/audio/birdvoice.mp3';
import Lofi from '../../assets/audio/lofi.mp3';
import Wolfhowing from '../../assets/audio/wolfhowing.mp3';

const Sound = () => {
	const [state, dispatch] = useThemeContext();
	const audioRef = useRef<HTMLAudioElement>(null);
	const [volume, setVolume] = useState(0.5);

	console.log(state)

	const soundMenu = [
		{
			name: 'Bell',
			value: Bell,
		},
		{
			name: 'Bird Voice',
			value: Birdvoice,
		},
		{
			name: 'Lofi',
			value: Lofi,
		},
		{
			name: 'Wolf Howling',
			value: Wolfhowing,
		},
	];

	const playAudio = (audioSource: string) => {
		if (audioRef.current) {
			audioRef.current.src = audioSource;
			audioRef.current.play();
		}
	};

	const handleVolumeChange = (newVolume: number) => {
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};

	return (
		<div className="flex flex-col pb-5 gap-4 h-full">
			<div className="flex flex-col gap-3">
				<label htmlFor="soundNotify" className="text-2xl">
					Sound:
				</label>
				<select
					name=""
					id="soundNotify"
					className="bg-transparent border px-4 py-2 appearance-none relative w-full focus:ring-2 ring-gray-500"
					onChange={(event) => {
						dispatch({ type: 'SOUND', value: event.target.value });
						localStorage.setItem('sound', event.target.value);
						playAudio(event.target.value);
					}}
				>
					{soundMenu.map((item, index) => (
						<option className="text-white bg-black/95" value={item.value} key={index}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<div className="flex items-center">
				<input
					className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-blue-300 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-blue-300 checked:focus:bg-blue-300 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckDefault"
				/>
				<label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="flexSwitchCheckDefault">
					Play sound when the time ends
				</label>
			</div>
			<audio ref={audioRef} /> {/* Audio element for playing selected audio */}
			<div className="flex flex-col gap-3">
				<label htmlFor="volume">Volume</label>
				<div className="flex items-center gap-3">
					<input
						type="range"
						min="0"
						max="100"
						step="1"
						value={volume * 100}
						onChange={(event) => handleVolumeChange(Number(event.target.value) / 100)}
						className="custom-range appearance-none w-1/2 h-2 rounded bg-neutral-300 focus:outline-none focus:bg-blue-300"
					/>
					<span
						className='text-xl'
					>{(volume * 100).toFixed(0)}</span>
				</div>
			</div>
		</div>
	);
};

export default Sound;
