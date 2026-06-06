import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

interface HouseasyProps {
	showButton?: boolean;
	showImage?: boolean;
}

const Houseasy: React.FC<HouseasyProps> = ({ showButton = true, showImage = true }) => {
	return (
		<section id="houseasy" className="bg-white">
			{showImage && (
				<img
					src="/Megan-V2.jpeg"
					alt="HousEasy - Megan Young Brand Ambassador"
					className="w-full block object-cover"
				/>
			)}
			<div className="container mx-auto px-4 md:px-6 pt-8 md:pt-10 pb-16 md:pb-24">
				<ScrollContainer className="text-center">
					<ScrollReveal>
						<img
							src="/HousEasy Logo.png"
							alt="HousEasy Logo"
							className="h-20 md:h-24 w-auto object-contain mx-auto mb-4"
						/>
					</ScrollReveal>
					<ScrollReveal>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">HousEasy</h2>
					</ScrollReveal>
					<ScrollReveal>
						<p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
							Home buying can be daunting– but it should not be!
							<br />With HousEasy, owning your dream home is made easy and fast.
						</p>
					</ScrollReveal>
				</ScrollContainer>

				<ScrollContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-16">
					<ScrollReveal className="w-full flex">
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 w-full flex flex-col justify-between">
							<div>
								<h3 className="text-2xl font-bold text-green-600 uppercase tracking-wide mb-4 group-hover:text-green-700 text-center">Instant Homes</h3>
								<p className="text-gray-600 text-base font-light leading-relaxed mb-4">
									Ovialand builds homes in 45 days! Yes, you read it right. This is possible with the technology Ovialand, Inc. is using and the highly skilled workers that the company has.
								</p>
								<p className="text-gray-600 text-base font-light leading-relaxed">
									Using proprietary pre-cast technology, Ovialand is able to build solid concrete homes with efficiency.
								</p>
							</div>
						</div>
					</ScrollReveal>

					<ScrollReveal className="w-full flex">
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 w-full flex flex-col justify-between">
							<div>
								<h3 className="text-2xl font-bold text-green-600 uppercase tracking-wide mb-4 group-hover:text-green-700 text-center">Instant Financing</h3>
								<p className="text-gray-600 text-base font-light leading-relaxed">
									Get your housing loan approved in 30 days! Ovialand partnered with esteemed financial institutions like Pag-IBIG, BDO, Chinabank, RCBC, and BPI, to make this possible.
								</p>
							</div>
						</div>
					</ScrollReveal>
				</ScrollContainer>

				{showButton && (
					<ScrollReveal className="mt-12 flex justify-center">
						<Link
							to="/business/housebuying"
							className="inline-block px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
						>
							Learn about the Ovialand homebuying process
						</Link>
					</ScrollReveal>
				)}
			</div>
		</section>
	);
};

export default Houseasy;
