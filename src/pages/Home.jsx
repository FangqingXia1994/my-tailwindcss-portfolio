import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import AboutMeSkills from '../components/about/AboutMeSkills';
import { AboutMeProvider } from '../context/AboutMeContext';
import Button from '../components/reusable/Button';
import projectImage from '../images/project.svg';
import { FiLink2 } from 'react-icons/fi';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<AboutMeProvider>
				<AboutMeSkills></AboutMeSkills>
			</AboutMeProvider>

			{/* <ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider> */}

			<div className="block border-t-2 border-primary-light dark:border-secondary-dark sm:flex sm:gap-10 mt-10 sm:mt-20">

				<div className="mt-8 sm:mt-10 sm:w-2/3 w-64 flex flex-col">
					<p className='text-ternary-dark dark:text-ternary-light text-md test-justify'>To delve deeper into my work and explore the innovative projects I've been involved in, I invite you to visit my Projects page. There, you’ll find detailed descriptions, technical insights, and the impact of my various projects.</p>

					<Link
						to="/projects"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 text-white"
					>
						<FiLink2 className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiLink2>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Explore Projects
						</span>
					</Link>
				</div>

				<div className="sm:w-1/3 mb-7 sm:mb-0">
					<img src={projectImage} className="rounded-lg w-106" alt="" />
				</div>
			</div>


		</div>
	);
};

export default Home;
