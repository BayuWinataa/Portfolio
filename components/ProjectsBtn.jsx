import Image from 'next/image';
import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
	return (
		<div className="mx-auto xl:mx-0 ">
			<Link href="/work" className="relative w-[140px] h-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
				<Image src="/rounded-text.png" alt="rounded text" width={100} height={100} className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px] pointer-events-none select-none" />
				<HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" aria-hidden />
			</Link>
		</div>
	);
};

export default ProjectsBtn;
