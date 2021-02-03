import React, { useState } from 'react';

const work = [
	{
		name: 'DNSToolbox',
		src: '../../../work/dnstoolbox.png',
		categories: 'webDev design ux',
		stack: 'React, Material UI, Sass, D3, Billboard JS',
		description:
			'Single page app that helps admins troubleshoot network and web performance issues.',
	},
	{
		name: 'SPF Wizard',
		src: '../../../work/spf-wizard.png',
		categories: 'webDev design ux',
		link: 'https://spfrecord.io',
		stack: 'JavaScript, Sass, Node, Webpack, Bootstrap',
		description:
			'Single page app that generates an SPF record to prevent mail spam. ',
	},
	{
		name: 'Constellix website (new)',
		src: '../../../work/constellix-homepage.png',
		categories: 'webDev design ux',
		link: 'https://constellix.com',
		stack: 'Bootstrap, Sass, JQuery',
		description: 'Corporate website for Managed DNS company',
	},
	{
		name: 'DNS Made Easy website',
		src: '../../../work/dnsmadeeasy-site.png',
		categories: 'webDev design ux',
		link: 'https://dnsmadeeasy.com',
		stack: 'Bootstrap, Sass, JQuery',
		description: 'Corporate website for Managed DNS company',
	},
	{
		name: 'Visual Soft website',
		src: '../../../work/visualsoft.png',
		categories: 'webDev design ux wordpress',
		link: 'https://dnsmadeeasy.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'Corporate website for government contractor',
	},
	{
		name: 'Sonar Lite web app',
		src: '../../../work/sonar-lite-webapp.png',
		categories: 'design ux',
		link: 'https://sonar-lite.constellix.com/',
		stack: 'ReactJS, JQuery, Bootstrap',
		description:
			'Single page app that includes popular troubleshooting tools for SysAdmins.',
	},
	{
		name: 'Domains Made Easy',
		src: '../../../work/domains-made-easy.png',
		categories: 'webDev wordPress design',
		link: 'https://domainsmadeeasy.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'eCommerce website for domain registrar',
	},
	{
		name: 'Pricing calculator',
		src: '../../../work/pricing-calc.png',
		categories: 'design ux webdev',
		link: 'https://constellix.com/pricing/pricing-calculator/',
		stack: 'ReactJS, Bootstrap, Sass',
		description: 'Pricing quote generator',
	},
	{
		name: 'Constellix Sign In Screen',
		src: '../../../work/constellix-sign-in.png',
		categories: 'design ux webdev',
		description: 'Login screen',
	},
	{
		name: 'Constellix UI idea',
		src: '../../../work/constellix-ui-design.png',
		categories: 'design ux',
		description: 'Concept for administrative dashboard',
	},
	{
		name: 'Constellix blog',
		src: '../../../work/constellix-blog.png',
		categories: 'webDev wordPress writing',
		link: 'http://news.constellix.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'Corporate blog',
	},
	{
		name: 'DNS Made Easy blog',
		src: '../../../work/dnsme-blog.png',
		categories: 'webDev wordPress writing',
		link: 'http://social.dnsmadeeasy.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'Corporate blog',
	},
	{
		name: 'Constellix landing page idea',
		src: '../../../work/constellix-landing-page-idea.png',
		categories: 'design',
		description: 'Landing page concept',
	},
	{
		name: 'Sonar Lite extension',
		src: '../../../work/rum-ext.png',
		categories: 'design',
		link:
			'https://chrome.google.com/webstore/detail/constellix-sonar-lite-net/jaoaipchgmdieejepndehhkgjihmffde?hl=en-US',
		description:
			'Design for a chrome extension that helps admins troubleshoot network issues.',
	},
	{
		name: 'What Every Web Developer Should Know About DNS',
		src: '../../../work/dzone.png',
		categories: 'writing',
		link:
			'https://dzone.com/articles/what-every-webmaster-should-know-about-dns',
		description: 'Technical blog',
	},
	{
		name: 'Constellix Knowledge Base',
		src: '../../../work/constellix-help-site.png',
		categories: 'webDev wordPress',
		link: 'http://help.constellix.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'Wordpress knowledge base for Managed DNS company',
	},
	{
		name: 'DNS Made Easy Knowledge Base',
		src: '../../../work/dnsme-help-site.png',
		categories: 'webDev wordPress',
		link: 'http://help.dnsmadeeasy.com',
		stack: 'Wordpress, CSS, JavaScript, PHP',
		description: 'Wordpress knowledge base for Managed DNS company',
	},
	{
		name: 'Tiggee website',
		src: '../../../work/tiggee-site.png',
		categories: 'webDev design',
		link: 'https://tiggee.com',
		stack: 'Sass, JavaScript, JQuery',
		description: 'Corporate website for project management firm',
	},

	{
		name: 'Forbes article',
		src: '../../../work/forbes.png',
		categories: 'writing',
		link:
			'https://www.forbes.com/sites/forbestechcouncil/2017/07/03/the-waze-of-dns-has-arrived/',
		description: 'Technical blog',
	},
	{
		name: 'Traffic Steering 101 Video',
		src: '../../../work/rum-ito-video.png',
		categories: 'video writing',
		link: 'https://constellix.com/solutions/rum-traffic-steering/',
		description: 'Animated video',
	},
	{
		name: 'Constellix website',
		src: '../../../work/constellix-site.png',
		categories: 'webDev design ux',
		link: 'https://constellix.com',
		description: 'Corporate website',
	},
];

export function Portfolio() {
	const [category, setCategory] = useState('webDev');
	const [items, setItems] = useState(
		work.filter((item) => item.categories.includes(category))
	);

	const filterWork = (e) => {
		const getFilteredWork = work.filter((item) =>
			item.categories.includes(e.target.value)
		);
		setItems(getFilteredWork);
		setCategory(e.target.value);
		console.log(items);
	};

	return (
		<div className="portfolio__container">
			<h2>Check out my work</h2>
			<h4>
				[ these examples are old, for examples of my recent work,
				contact me ]
			</h4>
			<div className="portfolio__categories">
				<button
					value="webDev"
					className="category"
					onClick={filterWork}
				>
					Web Dev
				</button>
				<button
					value="design"
					className="category"
					onClick={filterWork}
				>
					Design
				</button>
				<button value="ux" className="category" onClick={filterWork}>
					UX
				</button>
				<button
					value="wordPress"
					className="category"
					onClick={filterWork}
				>
					WordPress
				</button>
				<button value="video" className="category" onClick={filterWork}>
					Video
				</button>
				<button
					value="writing"
					className="category"
					onClick={filterWork}
				>
					Writing
				</button>
			</div>
			<div className="portfolio__grid">
				{items.map((item) => (
					<div className="portfolio__item">
						<div className="card" key={item.name}>
							<div className="card__face card__face--front">
								<img
									src={item.src}
									alt={item.name}
									className="portfolio__item"
								/>
							</div>
							<div className="card__face card__face--back">
								<p className="card__item__descr">
									{item.description}
								</p>
								<p className="card__item__stack">
									{item.stack}
								</p>
								{item.link ? (
									<a href={item.link}>See live version</a>
								) : null}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
