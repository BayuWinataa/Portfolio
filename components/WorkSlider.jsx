import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const workSlides = {
	slides: [
		{
			images: [
				{
					title: 'Manajemen Siswa',
					path: '/project/manajemenSiswa.png',
					link: 'https://github.com/BayuWinataa/Manajemen-Siswa',
				},
				{
					title: 'Pengelolaan Surat',
					path: '/project/pengelolaanSurat.png',
					link: 'https://github.com/BayuWinataa/Pengelolaan-Surat',
				},
				{
					title: 'Sistem Komunikasi',
					path: '/project/sistemKomunikasi.png',
					link: 'https://github.com/BayuWinataa/Sistem-Komunikasi',
				},
				{
					title: 'Website Akademik',
					path: '/project/websiteAkademik.png',
					link: 'https://github.com/BayuWinataa/Website-Akademik',
				},
			],
		},
		{
			images: [
				{
					title: 'Pengaduan Perpustakaan',
					path: '/project/pengaduanPerpustakaan.png',
					link: 'https://github.com/BayuWinataa/Pengaduan-Perpustakaan',
				},
				{
					title: 'Pembuatan Surat',
					path: '/project/pembuatanSurat.png',
					link: 'https://github.com/BayuWinataa/Pembuatan-Surat',
				},
				{
					title: 'Ekspedisi Surat',
					path: '/project/ekspedisiSurat.png',
					link: 'https://github.com/BayuWinataa/Ekspedisi-Surat',
				},
				{
					title: 'Manajemen Paket',
					path: '/project/manajemenPaket.png',
					link: 'https://github.com/BayuWinataa/Manajemen-Paket',
				},
			],
		},
		{
			images: [
				{
					title: 'Manajemen Surat',
					path: '/project/manajemenSurat.png',
					link: 'https://github.com/BayuWinataa/Manajemen-Surat',
				},
				{
					title: 'Manajemen Mahasiswa Skripsi',
					path: '/project/manajemenMahasiswaSkripsi.png',
					link: 'https://github.com/BayuWinataa/Mahasiswa-Skripsi',
				},
				{
					title: 'Manajemen Data Dosen dan Mahasiswa',
					path: '/project/dataDosenDanMahasiswa.png',
					link: 'https://github.com/BayuWinataa/Data-Dosen-Dan-Mahasiswa',
				},
				{
					title: 'Toko Komik',
					path: '/project/tokoKomik.png',
					link: 'https://github.com/BayuWinataa/Toko-komik',
				},
			],
		},
		{
			images: [
				{
					title: 'Manajemen Aktivitas Dosen',
					path: '/project/manajemenAktfitasDosen.png',
					link: 'https://github.com/BayuWinataa/Aktivitas-Dosen',
				},
				{
					title: 'Story App',
					path: '/project/',
					link: 'https://github.com/BayuWinataa/Story-app',
				},
				{
					title: 'Portfolio',
					path: '/project/portfolio.png',
					link: 'https://github.com/BayuWinataa/portofolio',
				},
				{
					title: 'Katalog Restoran',
					path: '/project/',
					link: 'https://github.com/BayuWinataa/Katalog-Restoran-PWA-Testing-and-Optimized',
				},
				// Tambahkan repository lainnya jika ada
			],
		},
		{
			images: [
				{
					title: 'Parfume Website',
					path: '/project/parfumeWebsite.png',
					link: 'https://github.com/BayuWinataa/perfume-website',
				},
				{
					title: 'Note App',
					path: '/thumb10.jpg',
					link: 'https://github.com/BayuWinataa/note-app',
				},
				{
					title: 'Nachama Website',
					path: '/project/nachama.png',
					link: '',
				},
				{
					title: 'Website Bayupedia',
					path: '/project/bayuPedia.png',
					link: '',
				},
			],
		},
	],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, i) => (
				<SwiperSlide key={i}>
					<div className="grid grid-cols-2 grid-rows-2 gap-4">
						{slide.images.map((image, imageI) => (
							<div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imageI}>
								<div className="flex items-center justify-center relative overflow-hidden group">
									{/* image */}
									<Image src={image.path} alt={image.title} width={500} height={300} />

									{/* overlay gradient */}
									<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" aria-hidden />

									{/* title */}
									<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
										<Link href={image.link} target="_blank" rel="noreferrer noopener" className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
											{/* title part 1 */}
											{/* <div className="delay-100"></div> */}
											{/* title part 2 */}
											<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">{image.title}</div>
											{/* icon */}
											<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
												<BsArrowRight aria-hidden />
											</div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;
