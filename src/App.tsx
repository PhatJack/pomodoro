import LightTrail from './assets/LightTrailsOnSuburbanHighway.png'
import './App.css'
import Banner from './assets/Study.png'


function App() {
	return (
		<div className='relative'>
			<div className="w-full h-full">
				<img src={LightTrail} alt="" className='w-full h-screen object-cover' />
			</div>
			{/* <Navbar /> */}
			<div className='absolute top-16 left-16'>
				<div className="flex justify-start items-center">
					<div className="w-[350px] z-10">
						<img src={Banner} alt="" className='w-full h-auto object-cover' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
