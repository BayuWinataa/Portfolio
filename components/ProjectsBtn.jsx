import Image from 'next/image';
import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
<<<<<<< HEAD
	return (
		<div className="mx-auto xl:mx-0 ">
			<Link href="/work" className="relative w-[140px] h-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
				<Image src="/rounded-text.png" alt="rounded text" width={100} height={100} className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px] pointer-events-none select-none" />
				<HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" aria-hidden />
			</Link>
		</div>
	);
=======
  return (
    <div className="mx-auto xl:mx-0">
      <Link 
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
>>>>>>> 867b1f3782d22fb68316eda688720d468161f9a1
};

export default ProjectsBtn;
