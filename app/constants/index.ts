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
		platform: "Web"
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
		platform: "Web"
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
		platform: "Web & Mobile"
	},
	{
		name: "Rehan School Management System",
		description:
			"Developed a comprehensive School Management System with both web and mobile interfaces. Features include complete student management (attendance, fees, grades), teacher management, task tracking, user administration, and detailed reporting. The system streamlines administrative tasks, handles fee collection, manages attendance tracking, and provides real-time insights for school administrators.",
		tags: [
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "mobile-app",
				color: "green-text-gradient",
			},
			{
				name: "management",
				color: "pink-text-gradient",
			},
			{
				name: "database",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/rehanschool.png",
		deploy_link: "https://school.superteclabs.com",
		platform: "Web & Mobile"
	},
	{
		name: "Video Editor Portfolio",
		description:
			"Designed and developed a professional portfolio website for a video editor, showcasing their work and services in a visually appealing manner.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "responsive-design",
				color: "green-text-gradient",
			},
			{
				name: "portfolio",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfolio.png",
		deploy_link: "https://shumail.superteclabs.com",
		platform: "Web"
	},
	{
		name: "AgentB AI Chatbot",
		description:
			"Developed an advanced AI chatbot platform that provides intelligent conversational interactions. Implemented using cutting-edge AI technologies and modern web development practices.",
		tags: [
			{
				name: "ai",
				color: "blue-text-gradient",
			},
			{
				name: "chatbot",
				color: "green-text-gradient",
			},
			{
				name: "machine-learning",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/agentb.webp",
		deploy_link: "https://agentb.net",
		platform: "Web"
	}
];

export { services, technologies, experiences, testimonials, projects };
