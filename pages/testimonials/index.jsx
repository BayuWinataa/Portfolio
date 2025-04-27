import { motion } from 'framer-motion';

// import TestimonialSlider from '../../components/TestimonialSlider';
import AnimatedList from '../../components/AnimitedList';

import { fadeIn } from '../../variants';

const Testimonials = () => {
	const items = [
		'Figma to WordPress Elementor - Convert Figma Design (Udemy) | April 2025',
		'Complete WordPress Course 2025 - Beginner to Expert (Udemy) | Maret 2025',
		'Membangun Aplikasi Modern Frontend dengan ReactJS (Udemy) | Maret 2025',
		'Sertifikat Kelas Belajar React.js dengan Membuat Aplikasi Split Bill (Codepolitan) | Maret 2025',
		'Sertifikat Kelas React.js State Management - Panduan Menggunakan State yg Baik (Codepolitan) | Maret 2025',
		'Belajar Back-End Pemula dengan JavaScript (Dicoding) | Maret 2025',
		'Belajar Toolset untuk Pengembangan Front-End Web (Dicoding) | Februari 2025',
		'Bikin Website Company Tanpa Coding Dengan WordPress dan Elementor (BWA) | Februari 2025',
		'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) (Dicoding) | Februari 2025',
		'Front-End Web Developer Level Mahir (DBS Bank) | Desember 2024',
		'Menjadi Front-End Web Developer Expert (Dicoding) | Desember 2024 – Desember 2027',
		'Fullstack Programming Untuk Pemula (Udemy) | November 2024',
		'TailwindCSS from A to Z: Master TailwindCSS Quickly (Udemy) | November 2024',
		'Belajar Membuat Aplikasi Web dengan React (Dicoding) | September 2024 – September 2027',
		'Front-End Web Developer Level Menengah (DBS Bank) | September 2024',
		'Sertifikat Kelas Belajar ReactJS (Codepolitan) | September 2024 – September 2027',
		'Belajar Fundamental Front-End Web Development (Dicoding) | Agustus 2024 – Agustus 2027',
		'Sertifikat Kelas Belajar Bootstrap CSS Framework (Codepolitan) | Agustus 2024 – Agustus 2027',
		'Sertifikat Kelas Belajar JavaScript (Codepolitan) | Agustus 2024 – Agustus 2027',
		'Belajar Dasar Pemrograman JavaScript (Dicoding) | Mei 2024 – Mei 2027',
		'Belajar Membuat Front-End Web untuk Pemula (Dicoding) | Mei 2024 –Mei 2027',
		'Belajar GIT untuk Pemula (Codepolitan) | Mei 2024',
		'DSF26 – Front End Developer (Dibimbing) | Mei 2024',
		'Mini Bootcamp: Web Development for Beginner (Edspert.id) | Mei 2024',
		'Belajar Dasar-dasar HTML dan CSS (Codepolitan) | April 2024',
		'Mini Bootcamp: Frontend Web Batch 2 (Alhazen Academy) | April 2024',
		'Belajar Dasar Pemrograman Web (Dicoding) | Maret 2024 – Maret 2027',
		'Intro to Software Engineering (Revou) | Maret 2024',
	];
	return (
		<div className="h-full bg-primary/30  text-center ">
			<div className="h-1/2 flex flex-col  ">
				<motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 mb-8 xl:mb-0">
					<span className="text-accent text-4xl">Sertifikat</span>
				</motion.h2>

				{/* slider */}
				<motion.div variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden">
					<AnimatedList items={items} onItemSelect={(item, index) => console.log(item, index)} showGradients={true} enableArrowNavigation={true} displayScrollbar={true} />
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
