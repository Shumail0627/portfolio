export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Head of Department",
		icon: "/backend.webp",
	},
	{
		title: "iOS Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Android Developer",
		icon: "/creator.webp",
	},
	{
		title: "Full Stack Developer",
		icon: "/web.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.js",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "Git",
		icon: "/tech/git.webp",
	},
	{
		name: "GitHub",
		icon: "/tech/github.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "WordPress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "Bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "Three.js",
		icon: "/tech/threejs.webp",
	}
];

const experiences = [
	{
		title: "Head of Department",
		company_name: "Rehan AI LAB",
		icon: "/company/rehan.webp",
		iconBg: "#383E56",
		date: "2022 - Present",
		points: [
			"Lead a team of developers working on AI and machine learning projects.",
			"Oversee the department's operations, ensuring alignment with business goals and technical objectives.",
			"Manage project timelines, resources, and deliverables.",
			"Mentor junior team members, providing training and support."
		],
	}
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Experienced web developer with strong leadership and technical skills.",
		name: "Shumail Mehboob",
		image: "/socialmedia/github.svg",
		link: "https://github.com/shumailmehboob",
	},
	{
		id: 2,
		testimonial:
			"Connect with me on LinkedIn to learn more about my professional experience.",
		name: "Shumail Mehboob",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/shumail-mehboob/",
	},
	{
		id: 3,
		testimonial:
			"Check out my portfolio for more of my work and projects.",
		name: "Shumail Mehboob",
		image: "/socialmedia/portfolio.svg",
		link: "https://shumailmehboob.dev",
	}
];

const projects = [
	{
		name: "OutfitBySM eCommerce Store",
		description: 
			"Developed a full-featured eCommerce platform using PHP Laravel. Features include: Product catalog with categories, Shopping cart functionality, Secure payment integration, Order management system, User authentication and profiles, Admin dashboard for inventory management, Order tracking, and automated email notifications for orders and shipping updates.",
		tags: [
			{
				name: "Laravel",
				color: "blue-text-gradient",
			},
			{
				name: "PHP",
				color: "green-text-gradient",
			},
			{
				name: "MySQL",
				color: "pink-text-gradient",
			},
			{
				name: "eCommerce",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/outfitbysm.png",
		deploy_link: "https://outfitbysm.superteclabs.com",
		platform: "Vercel"
	},
	{
		name: "Paki.com Social Platform",
		description: 
			"Developed a feature-rich social media platform similar to Twitter with real-time capabilities. Features include: Live news feed, post creation with media upload, interactive engagement (likes, comments, shares), real-time messaging system, user profiles, and follow/following functionality. Built with modern web technologies focusing on real-time updates and seamless user experience.",
		tags: [
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "socket.io",
				color: "green-text-gradient",
			},
			{
				name: "real-time",
				color: "pink-text-gradient",
			},
			{
				name: "MySQL",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/paki.png",
		deploy_link: "https://paki.com",
		platform: "Vercel"
	},
	{
		name: "Supertec Office Management System",
		description: 
			"Built a comprehensive Office Management System with web and mobile interfaces. Features include: Location-based attendance system with remote work support, Task management, Advanced payroll system with bulk processing, Leave management, In-app chat system, Employee performance tracking, Automated salary calculations, Email notification system, and Real-time employee location tracking. The system streamlines office operations for both administrators and employees with role-based access control.",
		tags: [
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "Flutter",
				color: "green-text-gradient",
			},
			{
				name: "geolocation",
				color: "pink-text-gradient",
			},
			{
				name: "real-time",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/supertec.png",
		deploy_link: "https://superteclabs.com",
		platform: "Vercel"
	},
	{
		name: "Issue Tracker",
		description:
			"A comprehensive issue tracking system built with the MERN stack. Features include: User authentication, Issue creation and management, Priority levels, Status tracking, Assignment capabilities, Comment system, and Search functionality. The system helps teams track and manage project issues efficiently.",
		tags: [
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
			{
				name: "Express.js",
				color: "green-text-gradient",
			},
			{
				name: "React",
				color: "pink-text-gradient",
			},
			{
				name: "Node.js",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/issuetracker.png",
		deploy_link: "https://issuetracker.vercel.app",
		platform: "Vercel"
	},
	{
		name: "HooBank Modern Website",
		description:
			"A modern and responsive banking website built with React and Tailwind CSS. Features include: Modern UI/UX design, Responsive layout, Interactive components, Smooth animations, and Performance optimization. The project demonstrates modern web development practices and design principles.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/hoobank.webp",
		deploy_link: "https://hoobank-modern.vercel.app",
		platform: "Vercel"
	},
	{
		name: "Metaverse Website",
		description:
			"An immersive metaverse website built with Next.js 13 and Framer Motion. Features include: Modern design, Smooth animations, Interactive UI elements, and Responsive layout. The project showcases advanced animation techniques and modern web development practices.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Framer Motion",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/metaverse.png",
		deploy_link: "https://metaverse-modern.vercel.app",
		platform: "Vercel"
	},
	{
		name: "AVM Website",
		description:
			"A modern business website built with Next.js and Tailwind CSS. Features include: Responsive design, Contact forms, Service showcases, and Team member profiles. The project demonstrates clean code practices and modern web development techniques.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
			{
				name: "TypeScript",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/avm.webp",
		deploy_link: "https://avm-website.vercel.app",
		platform: "Vercel"
	},
	{
		name: "SparkBright Website",
		description:
			"A dynamic business website built with Next.js and Tailwind CSS. Features include: Modern UI design, Responsive layout, Service showcases, and Contact integration. The project demonstrates professional web development practices.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
			{
				name: "TypeScript",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/sparkbright.png",
		deploy_link: "https://sparkbright.vercel.app",
		platform: "Vercel"
	}
];

export { services, technologies, experiences, testimonials, projects };
