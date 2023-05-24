import Image from 'next/image'

const Card = () => {
	return (
		<section className='flex max-w-sm flex-col items-center space-y-7 rounded-2xl bg-blue-850 p-6'>
			<div className='group relative w-80 rounded-lg hover:bg-cyan-550'>
				<img
					src='/images/image-equilibrium.jpg'
					alt='Product Image'
					className='w-full rounded-lg group-hover:opacity-50 '
				/>

				<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
					<img
						src='/images/icon-view.svg'
						alt='Eye Icon Image'
						className='w-11 group-hover:cursor-pointer'
					/>
				</div>
			</div>
			<div className='flex flex-col space-y-4'>
				<h1 className='text-2xl font-semibold tracking-wide hover:cursor-pointer hover:text-cyan-550'>
					Equilibrium #3429
				</h1>
				<p className='max-w-xs text-lg font-light tracking-wide text-blue-350'>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<div className='flex justify-between'>
					<div className='flex items-center space-x-2'>
						<img
							src='/images/icon-ethereum.svg'
							alt='ethereum icon image'
							className='h-5 w-3'
						/>
						<p className='font-semibold tracking-wide text-cyan-550'>
							0.041 ETH
						</p>
					</div>
					<div className='flex items-center space-x-2'>
						<img
							src='/images/icon-clock.svg'
							alt='clock icon image'
							className='h-4 w-4'
						/>
						<p className='font-light tracking-wide text-blue-350'>
							3 days left
						</p>
					</div>
				</div>
				<hr className='border-[1px] border-blue-750' />
				<div className='flex items-center space-x-4'>
					<img
						src='/images/image-avatar.png'
						alt='image of creator'
						className='h-9 w-9 rounded-full  border-[1px] border-white'
					/>
					<p className='font-light tracking-wide text-blue-350'>
						Creation of{' '}
						<span className='text-white hover:cursor-pointer hover:text-cyan-550'>
							Jules Wyvern
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}
export default Card
