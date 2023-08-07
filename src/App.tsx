import LightTrail from './assets/LightTrailsOnSuburbanHighway.png'
import './App.css'
import Navbar from './components/Navbar'
import Tags from './components/Tags'

function App() {

	return (
		<div className='relative bg-black'>
			<div className="w-full h-full -z-10 fixed top-0 left-0 right-0 bottom-0">
				<img src={LightTrail} alt="" className='w-full h-screen object-cover object-center -z-10' />
			</div>
			<div className="absolute flex flex-col justify-between items-center h-screen py-16 w-full">
				<Navbar />
				<Tags />
				<div className="bg-white p-5 text-black">
					Hello
				</div>
			</div>
		</div>
	)
}

export default App
