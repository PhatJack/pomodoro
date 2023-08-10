import React from 'react'



const Sound = () => {

	const soundMenu = [
		{
			name: "Bell",
			value: "bell"
		},
		{
			name: "Bird Voice",
			value: "birdvoice"
		},
		{
			name: "Lofi",
			value: "lofi"
		},
		{
			name: "Chicken Gang",
			value: "chickengang"
		}
	]

	return (
		<div className='flex flex-col pb-5 gap-4 h-full'>
			<div className="flex flex-col gap-3">
				<label htmlFor="soundNotify" className='text-2xl'>Sound:</label>
				<select
					name=""
					id="soundNotify"
					className='bg-transparent border px-4 py-2 appearance-none relative w-full focus:ring-2 ring-gray-500'
				>
					{
						soundMenu.map((item, index) => (
							<option
								className='text-white bg-black/95'
								value={item.value}
								key={index}
							>{item.name}</option>
						))
					}
				</select>
			</div>
		</div>
	)
}

export default Sound