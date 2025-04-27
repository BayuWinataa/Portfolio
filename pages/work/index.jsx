import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
		<div className="h-full bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-row gap-x-4 xl:gap-x-8">
					{/* text */}
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
						<motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 mt-36 xl:mt-12 ">
							Karya Saya <span className="text-accent">.</span>
						</motion.h2>
						<motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
							Di bagian ini, Anda dapat melihat berbagai proyek yang telah saya kerjakan, mulai dari website portofolio pribadi, sistem informasi berbasis web, hingga desain antarmuka pengguna yang menarik. Setiap proyek mencerminkan minat
							saya dalam dunia teknologi dan dedikasi saya dalam memberikan solusi kreatif dan fungsional.
						</motion.p>
					</div>

					{/* slider */}
					<motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full  pt-40 xl:pt-0 max-w-[55%] xl:max-w-[65%] cursor-grab">
						<WorkSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Work;
