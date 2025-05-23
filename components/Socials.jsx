import Link from 'next/link';
import { RiInstagramLine, RiGithubLine, RiLinkedinBoxLine, MdEmail } from 'react-icons/ri'; // RiLinkedinBoxLine tetap dari ri
import { MdEmail as EmailIcon } from 'react-icons/md'; // Email dari Material Design Icons

export const socialData = [
	{
		name: 'Instagram',
		link: 'https://instagram.com/Bayuwinata__',
		Icon: RiInstagramLine,
	},
	{
		name: 'Github',
		link: 'https://github.com/bayuwinataa',
		Icon: RiGithubLine,
	},
	{
		name: 'LinkedIn',
		link: 'https://linkedin.com/in/bayuwinata',
		Icon: RiLinkedinBoxLine,
	},
	{
		name: 'Gmail',
		link: 'mailto:bayuwinata94@gmail.com',
		Icon: EmailIcon,
	},
];

const Socials = () => {
	return (
		<div className="flex items-center gap-x-5 text-lg">
			{socialData.map((social, i) => (
				<Link
					key={i}
					title={social.name}
					href={social.link}
					target="_blank"
					rel="noreferrer noopener"
					className={`${social.name === 'Github' ? 'bg-accent rounded-full p-[5px] hover:text-white' : 'hover:text-accent'} transition-all duration-300`}
				>
					<social.Icon aria-hidden />
					<span className="sr-only">{social.name}</span>
				</Link>
			))}
		</div>
	);
};

export default Socials;
