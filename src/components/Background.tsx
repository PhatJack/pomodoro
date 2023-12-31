import TokyoSakura from '../assets/TokyoSakura.png'
import RainyDay from '../assets/RainyDay.png'
import LifeGoesOn from '../assets/LifeGoesOn.png'
import Galaxy from '../assets/Galaxy.png'
import NeonCity from '../assets/NeonCity.png'
import AestheticCafeteria from '../assets/AestheticCafeteria.png'
import LightTrailsOnSuburbanHighway from '../assets/LightTrailsOnSuburbanHighway.png'


const Background = () => {

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

	const getImgSrc = listImg.find((item) => localStorage.getItem("imageBg")?.toLowerCase() === item.value.toLowerCase()) || listImg[0];
	
	return (
		<div className="w-full h-full -z-10 fixed top-0 left-0 right-0 bottom-0 object-cover object-center">
			<img
				src={getImgSrc.img}
				alt=""
				className='w-full h-screen object-cover object-center -z-10 bg-black'
				loading='lazy'
				placeholder='TokyoSakura'
			/>
		</div>
	)
}

export default Background