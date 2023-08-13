import FavicoIcon from '../assets/FavicoIcon.png'
import {memo} from 'react'
const Footer = () => {
	return (
		<div className='px-16 p w-full'>
			<div className="flex justify-between items-center w-full">
				<div className="spotfiy-api">
					Spotify
				</div>
				<div className="logo aspect-square w-28 h-28">
					<img src={FavicoIcon} alt="" className='w-full h-full object-cover aspect-square' />
				</div>
			</div>
		</div>
	)
}

export default memo(Footer)