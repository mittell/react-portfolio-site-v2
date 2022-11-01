import React from 'react';

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi, I'm Chris, nice to meet you...</p>
					</div>
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
							obcaecati, quidem facere deleniti sit ab consequatur ipsum
							reprehenderit facilis qui nobis blanditiis in inventore totam
							recusandae dolorum, laudantium voluptatibus provident aliquam quo.
							Voluptas ad similique quia nulla non corrupti illo officiis
							perferendis, praesentium, deserunt mollitia inventore quidem
							placeat. Nihil, velit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
