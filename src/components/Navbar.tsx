import React from 'react'
import Banner from '../assets/Study.png'


const Navbar = () => {
	return (
		<div className='py-10 px-20 absolute'>
			<div className="flex justify-start items-center">
				<div className="w-32 h-32 z-10">
					<img src={Banner} alt="" className='z-10'/>
				</div>
			</div>
		</div>
	)
}

export default Navbar;