import React from 'react'
import Banner from '../assets/Study.png'


const Navbar = () => {
	return (
		<div className='w-full pl-16'>
			<div className="flex justify-center md:justify-start items-center">
				<div className="w-[350px] z-10">
					<img src={Banner} alt="Banner" className='w-full h-auto object-cover' loading='lazy' />
				</div>
			</div>
		</div>
	)
}

export default Navbar;