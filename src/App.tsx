import Navbar from './components/Navbar';
import TokyoSakura from './assets/TokyoSakura.png'
import RainyDay from './assets/RainyDay.png'
import LifeGoesOn from './assets/LifeGoesOn.png'
import Galaxy from './assets/Galaxy.png'
import NeonCity from './assets/NeonCity.png'
import AestheticCafeteria from './assets/AestheticCafeteria.png'
import LightTrailsOnSuburbanHighway from './assets/LightTrailsOnSuburbanHighway.png'
import Tags from './components/Tags';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { useThemeContext } from './hooks/useThemeContext';

function App() {
	const [state, dispatch] = useThemeContext();
	console.log(state, dispatch)
	// Provide a default value for state.mainBg if it's null

	const listImg = [
		{
			name: "Tokyo Sakura",
			img: TokyoSakura,
			value: "TokyoSakura"
		},
		{
			name: "Aesthetic Cafeteria",
			img: AestheticCafeteria,
			value: "AestheticCafeteria"
		},
		{
			name: "Neon City",
			img: NeonCity,
			value: "NeonCity"
		},
		{
			name: "Galaxy",
			img: Galaxy,
			value: "Galaxy"
		},
		{
			name: "Rainy Day",
			img: RainyDay,
			value: "RainyDay"
		},
		{
			name: "Life Goes On",
			img: LifeGoesOn,
			value: "LifeGoesOn"
		},
		{
			name: "Light Trails On Suburban Highway",
			img: LightTrailsOnSuburbanHighway,
			value: "LightTrailsOnSuburbanHighway"
		}
	]

	const getImgSrc = listImg.filter((item) => {return localStorage.getItem("imageBg") == item.value.toString() })
	console.log(getImgSrc[0].img)
	return (
		<div className='relative bg-black'>
			<div className="w-full h-full -z-10 fixed top-0 left-0 right-0 bottom-0 object-cover object-center">
				<img
					src={getImgSrc[0].img}
					alt=""
					className='w-full h-screen object-cover object-center -z-10 bg-black'
					loading='lazy'
					placeholder='TokyoSakura'
				/>
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
	);
}

export default App;
