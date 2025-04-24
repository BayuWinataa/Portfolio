// import Image from "next/image";
// import Link from "next/link";

// import Socials from "../components/Socials";

const Header = () => {
	return (
		<header className="absolute  w-full items-center px-16 xl-px-0 xl:h-[90px] ">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
					{/* logo */}
					<h1 className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-lg cursor-pointer ">Bayu Winata</h1>

					{/* socials */}
					{/* <Socials /> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
