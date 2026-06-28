import profileImage from '../../images/techstack.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeSkills = () => {
	const { skills } = useContext(AboutMeContext);

	return (

		<div className="block py-20 border-t-2 border-primary-light dark:border-secondary-dark sm:flex sm:gap-10 mt-10 sm:mt-20">
			{/* <div className="text-center">
				<p className="mt-4 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
					Skills
				</p>
			</div> */}
			<div className="shrink-0 w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-full h-auto" alt="" />
			</div>

			<div className="font-sans w-3/4 text-justify">
				{skills.map((skill) => (
					<p
						className="mt-2 text-ternary-dark dark:text-ternary-light text-md"
					>
						<span className="font-bold">{skill.title}</span>

						: {skill.items}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeSkills;
