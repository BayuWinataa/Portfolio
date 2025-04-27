import { motion } from 'framer-motion';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { fadeIn } from '../variants';

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			{/* text */}
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-32 xl:text-left h-full container mx-auto">
					{/* title */}
					<motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 text-4xl xl:text-7xl">
						Frontend Web <br />
						<span className="text-accent">Developer</span>
					</motion.h1>

					{/* subtitle */}
					<motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-full xl:max-w-xl mx-0 mb-5  ">
						Saya seorang Frontend Developer yang fokus pada desain dan pengembangan tampilan web yang responsif, modern, dan mudah digunakan. Menggabungkan estetika visual dengan fungsionalitas adalah prioritas saya dalam setiap proyek.
					</motion.p>

					{/* btn */}
					<div className="flex justify-center xl:hidden relative">
						<ProjectsBtn />
					</div>

					<motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>

			{/* image */}
			<div className="w-[1280px] h-full absolute right-0 bottom-0">
				{/* bg img */}
				<div role="img" className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" aria-hidden />

				{/* particles */}
				<ParticlesContainer />

				{/* avatar */}
				<motion.div
					variants={fadeIn('up', 0.5)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: 'easeInOut' }}
					className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
				>
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
