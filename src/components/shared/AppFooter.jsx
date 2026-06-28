import {
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiHome,
	FiYoutube,
} from 'react-icons/fi';
import { FaSteam } from 'react-icons/fa';
import AppFooterCopyright from './AppFooterCopyright';
import profileImage from '../../images/connect.png';

const socialLinks = [
	{
		id: 1,
		icon: <FiHome />,
		url: '/',
	},
	// {
	// 	id: 2,
	// 	icon: <FiGithub />,
	// 	url: '',
	// },
	{
		id: 3,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/fungching9413/',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/fangqingxia/',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/channel/UCRcailtO8Ww_5EMv3sE7RGw',
	},
	{
		id: 6,
		icon: <FaSteam />,
		url: 'https://steamcommunity.com/profiles/76561198308770769',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto pt-20 sm:pt-30 pb-8 mt-10">
			<div className="flex flex-row border-t-2 border-primary-light dark:border-secondary-dark sm:gap-10">
				<div className="w-1/3 mb-7 sm:mb-0 flex justify-center items-center">
					<img src={profileImage} className="rounded-lg w-96" alt="" />
				</div>

				{/* Footer social links */}
				<div className="w-2/3 font-general-regular flex justify-center items-center mb-12 sm:mb-28">
					<div className="flex flex-col justify-center items-center">
						<p
							className="text-3xl sm:text-4xl font-general-semibold mb-5"
							style={{
								background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
						>
							Follow me
						</p>
						<ul className="flex gap-4 sm:gap-8">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="_blank"
									key={link.id}
									className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
								>
									<i className="text-xl sm:text-2xl md:text-3xl">
										{link.icon}
									</i>
								</a>
							))}
						</ul>
					</div>
				</div>
			</div>
			<AppFooterCopyright />
		</div>
	);
};

export default AppFooter;
