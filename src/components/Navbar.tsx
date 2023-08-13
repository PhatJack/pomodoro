import { memo } from 'react';
import Banner from '../assets/Study.png'

const Navbar = () => {
	console.log('re-render')
	return (
		<div className='w-full pl-16'>
			<div className="flex justify-center md:justify-start items-center">
				<img src={Banner} alt="Banner" className='h-auto object-cover w-[350px] z-10' />
			</div>
		</div>
	)
}

export default memo(Navbar);