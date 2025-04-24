import { motion } from 'framer-motion';
import { useState } from 'react';
import CountUp from 'react-countup';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaPhp, FaReact, FaWordpress, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiAdobexd, SiFramer, SiNextdotjs, SiTailwindcss, SiCodeigniter, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';

//  data
export const aboutData = [
	{
		title: 'keahlian',
		info: [
			{
				title: 'Pengembangan Web',
				icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaWordpress, FaPhp, SiTailwindcss, FaBootstrap, SiCodeigniter, FaNodeJs],
			},
			{
				title: 'Desain UI/UX',
				icons: [FaFigma, SiAdobexd],
			},
			{
				title: 'Perkantoran',
				icons: [SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint],
			},
		],
	},
	{
		title: 'pengalaman',
		info: [
			{
				title: 'Freelance',
				stage: 'Februari 2024 - Sekarang',
			},
			{
				title: 'Magang IT - Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe',
				stage: 'Oktober 2024 – Desember 2024',
			},
			{
				title: 'Teknisi Indihome - PT. Nasri Sejahtera Utama',
				stage: 'Desember 2021 – Februari 2022',
			},
		],
	},
	{
		title: 'pendidikan',
		info: [
			{
				title: 'S1 Teknik Informatika - Universitas Malikussaleh',
				stage: '2022 – Sekarang | IPK 3.69/4.00',
			},
			{
				title: 'Pertukaran Mahasiswa Merdeka Batch 3 - UPN "Veteran" Jawa Timur',
				stage: 'Agustus 2023 – Desember 2023',
			},
			{
				title: 'Teknik Komputer dan Jaringan - SMK Abdi Negara Binjai',
				stage: '2019 – 2022 | Rata-rata Nilai 90/100',
			},
		],
	},
];


const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />

			{/* avatar img */}
			<motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
				<Avatar />
			</motion.div>

			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
				{/* text */}
				<div className="flex-1 flex flex-col justify-center">
					<motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="text-5xl font-bold ">
						Membangun <span className="text-accent">tampilan web</span> yang fungsional & menarik.
					</motion.h2>

					<motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						Saya seorang Frontend Developer pemula yang sedang aktif belajar dan mengembangkan berbagai proyek pribadi. Fokus utama saya adalah membuat tampilan web yang responsif, modern, dan ramah pengguna.
					</motion.p>

					{/* Penghitung */}
					<motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
						<div className="flex flex-1 xl:gap-x-6">
							{/* Pengalaman */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex">
									<CountUp start={0} end={1} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Tahun Pengalaman</div>
							</div>

							{/* Klien */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex">
									<CountUp start={0} end={10} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Klien</div>
							</div>

							{/* Proyek */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex">
									<CountUp start={0} end={20} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Proyek Selesai</div>
							</div>

							{/* Sertifikat */}
							<div className="relative flex-1">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex">
									<CountUp start={0} end={45} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Sertifikat</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info */}
				<motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, itemI) => (
							<div
								key={itemI}
								className={`${
									index === itemI && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
								} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
								onClick={() => setIndex(itemI)}
							>
								{item.title}
							</div>
						))}
					</div>

					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-2 items-center xl:items-start z-30">
						{aboutData[index].info.map((item, itemI) => (
							<div key={itemI} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2  text-white/60 ">
								{/* title */}
								<div className="font-light flex flex-start">{item.title}</div>
								<div className="hidden md:flex">-</div>
								<div>{item.stage}</div>

								<div className="flex flex-wrap gap-4 max-w-[300px]">
									{/* Icons */}
									{item.icons?.map((Icon, iconI) => (
										<div key={iconI} className="text-2xl text-white">
											<Icon />
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
