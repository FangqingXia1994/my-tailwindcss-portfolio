import { useState, useEffect } from 'react';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiSearch } from 'react-icons/fi';
import developerLight from '../../images/developer.png';
import developerDark from '../../images/developer.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TYPING_TEXT = 'Developer and AI Enthusiast';
const TYPING_SPEED = 80;   // ms per character
const CURSOR_BLINK = 530;  // ms per blink cycle

const TypingText = () => {
	const [displayed, setDisplayed] = useState('');
	const [charIndex, setCharIndex] = useState(0);
	const [cursorVisible, setCursorVisible] = useState(true);

	// Type one character at a time
	useEffect(() => {
		if (charIndex < TYPING_TEXT.length) {
			const timeout = setTimeout(() => {
				setDisplayed((prev) => prev + TYPING_TEXT[charIndex]);
				setCharIndex((prev) => prev + 1);
			}, TYPING_SPEED);
			return () => clearTimeout(timeout);
		}
	}, [charIndex]);

	// Blink cursor
	useEffect(() => {
		const interval = setInterval(() => {
			setCursorVisible((v) => !v);
		}, CURSOR_BLINK);
		return () => clearInterval(interval);
	}, []);

	return (
		<span>
			{displayed}
			<span
				aria-hidden="true"
				style={{
					display: 'inline-block',
					width: '2px',
					height: '1em',
					backgroundColor: 'currentColor',
					marginLeft: '2px',
					verticalAlign: 'text-bottom',
					opacity: cursorVisible ? 1 : 0,
					transition: 'opacity 0.1s',
				}}
			/>
		</span>
	);
};

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
				>
					Hi, I am{' '}
					<br />
					<span
						style={{
							background:
								'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
						}}
					>
						Fangqing Xia
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					<TypingText />
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<Link
						to="/about"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 text-white"
					>
						<FiSearch className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiSearch>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Learn More
						</span>
					</Link>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
