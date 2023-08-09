import LightTrail from './assets/LightTrailsOnSuburbanHighway.png'
import LifeGoesOn from './assets/LifeGoesOn.png'
import TokyoSakura from './assets/TokyoSakura.png'
import NeonCity from './assets/NeonCity.png'
import Navbar from './components/Navbar'
import Tags from './components/Tags'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {

	return (
		<div className='relative bg-black'>
			<div className="w-full h-full -z-10 fixed top-0 left-0 right-0 bottom-0 object-cover object-center">
				<img src={TokyoSakura} alt="" className='w-full h-screen object-fill object-center -z-10 bg-black' loading='lazy' placeholder='TokyoSakura' />
			</div>
			<div className="absolute flex flex-col justify-between items-center h-screen py-16 w-full bg-black/20">
				<Navbar />
				<Tags />
				<Footer />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}

export default App
