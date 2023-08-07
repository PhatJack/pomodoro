import LightTrail from './assets/LightTrailsOnSuburbanHighway.png'
import './App.css'
import Navbar from './components/Navbar'
import { VscDebugRestart } from 'react-icons/vsc'
import { MdOutlineSettingsSuggest } from 'react-icons/md'
function App() {
	return (
		<div className='relative bg-black'>
			<div className="w-full h-full -z-10 fixed top-0 left-0 right-0 bottom-0">
				<img src={LightTrail} alt="" className='w-full h-screen object-cover object-center -z-10' />
			</div>
			<div className="absolute flex flex-col justify-between items-center h-screen py-16 w-full">
				<Navbar />
				<div className='flex flex-col justify-between items-center'>
					<div className="pomodoro-duration flex w-full justify-between items-center gap-3 h-[4em]">
						<div className="flex justify-center items-center relative overflow-hidden">
							<input type="radio" name="pomodoro-duration" id="pomodoro-duration1" className='opacity-0 cursor-pointer text-center w-[130px] h-[3.5em] fixed flex-1 peer/duration-first' />
							<label htmlFor="pomodoro-duration1" className='text-white border-2 font-semibold rounded-md px-5 py-3 text-lg peer-checked/duration-first:bg-white peer-checked/duration-first:text-black'>Pomodoro</label>
						</div>
						<div className="flex justify-center items-center relative overflow-hidden">
							<input type="radio" name="pomodoro-duration" id="pomodoro-duration2" className='opacity-0 cursor-pointer text-center w-[130px] h-[3.5em] fixed flex-1 peer/duration-second' />
							<label htmlFor="pomodoro-duration2" className='text-white border-2 font-semibold rounded-md px-5 py-3 text-lg peer-checked/duration-second:bg-white peer-checked/duration-second:text-black'>Short Break</label>
						</div>
						<div className="flex justify-center items-center relative overflow-hidden">
							<input type="radio" name="pomodoro-duration" id="pomodoro-duration3" className='opacity-0 cursor-pointer text-center w-[130px] h-[3.5em] fixed flex-1 peer/duration-third' />
							<label htmlFor="pomodoro-duration3" className='text-white border-2 font-semibold rounded-md px-5 py-3 text-lg peer-checked/duration-third:bg-white peer-checked/duration-third:text-black'>Long Break</label>
						</div>
					</div>

					<div className="pomodoro-timer text-[150px] text-white font-semibold">
						25:00
					</div>
					<div className="flex justify-between items-center gap-5">
						<button className='text-2xl text-black font-semibold px-5 py-2 border bg-white rounded-md'>Start</button>
						<button>
							<VscDebugRestart size={30} className="text-white" />
						</button>
						<button>
							<MdOutlineSettingsSuggest size={35} className="text-white" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
