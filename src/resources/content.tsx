import {
	About,
	Blog,
	Gallery,
	Home,
	Newsletter,
	Person,
	Social,
	Work,
} from "@/types"
import { Line, Row, Text } from "@once-ui-system/core"
import { withBasePath } from "@/utils/basePath"

const person: Person = {
	firstName: "Christian",
	lastName: "Cardenas",
	name: "Christian J. Cardenas",
	role: "Computer Science Student",
	avatar: withBasePath("/images/avatar.jpg"),
	email: "christian.j.cardenas05@gmail.com",
	location: "America/New_York",
	languages: ["English", "Spanish"],
}

const newsletter: Newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: <>My weekly newsletter about engineering and finance</>,
}

const social: Social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	// Set essentials: true for links you want to show on the about page
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/idkh0wtocode", // Placeholder
		essential: true,
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/christian-cardenas-5a07302aa/", // Placeholder
		essential: true,
	},
	{
		name: "Email",
		icon: "email",
		link: `mailto:${person.email}`,
		essential: true,
	},
]

const home: Home = {
	path: "/",
	image: withBasePath("/images/og/home.jpg"),
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Building scalable backend systems and quantitative models</>,
	featured: {
		display: true,
		title: (
			<Row gap="12" vertical="center">
				<strong className="ml-4">Selected Project</strong>{" "}
				<Line background="brand-alpha-strong" vert height="20" />
				<Text marginRight="4" onBackground="brand-medium">
					Investment Tracker
				</Text>
			</Row>
		),
		href: "/work/investment-performance-tracker",
	},
	subline: (
		<>
			I'm Christian, a Computer Science student at the{" "}
			<Text as="span" size="xl" weight="strong">
				University of Florida
			</Text>
			, specializing in <br /> backend development, machine learning, and
			quantitative finance.
		</>
	),
}

const about: About = {
	path: "/about",
	label: "About",
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from Gainesville, FL`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				Christian is a Computer Science student at the University of
				Florida with a strong background in software engineering and
				quantitative analysis. He has experience developing scalable LTI
				applications, architecting quantitative trading models, and
				conducting machine learning research. His technical toolkit
				includes Python, C++, Go, and a variety of data science and web
				development technologies.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "Grasshopper Lab (UF)",
				timeframe: "Aug 2025 - Present",
				role: "Research Assistant",
				achievements: [
					<>
						Developing an LTI application integrated with Canvas to
						automate instructor workflows, targeting a 92%
						improvement in efficiency.
					</>,
					<>
						Developed scalable Flask backend integrating multiple
						RESTful APIs, streamlining assignment extension requests
						and improving response time by 80%.
					</>,
					<>
						Implemented secure authentication and data protection
						practices in Flask backend application, ensuring proper
						access control.
					</>,
				],
				images: [],
			},
			{
				company: "AlgoGators Investment Fund",
				timeframe: "Jan 2025 - Present",
				role: "Senior Quantitative Analyst",
				achievements: [
					<>
						Conducted independent research on using ML models
						(Temporal Fusion Transformers vs LSTM) for
						volatility-based regime classification (0.92 F1 score).
					</>,
					<>
						Leveraged unsupervised clustering, macroeconomic feature
						engineering, and rigorous validation over 5,700
						timesteps.
					</>,
					<>
						Utilized PostgreSQL to manage over 9 million rows of
						historical and real-time market data.
					</>,
				],
				images: [],
			},
			{
				company: "AlgoGators Investment Fund",
				timeframe: "Apr 2024 - Apr 2025",
				role: "Internal Associate",
				achievements: [
					<>
						Architected a quantitative trading model in Python that
						automated data acquisition, signal generation, and
						performance backtesting.
					</>,
					<>
						Designed and instructed a 4-part quantitative trading
						workshop for 200+ students.
					</>,
				],
				images: [],
			},
			{
				company: "Comillas Pontifical University",
				timeframe: "May 2025 - Jul 2025",
				role: "Machine Learning Researcher",
				achievements: [
					<>
						Applied Fourier and Wavelet transforms to develop a
						CNN-based detection framework for drone activity,
						achieving over 93% accuracy.
					</>,
					<>
						Optimized spectrogram generation and preprocessing
						steps, increasing detection accuracy by 5% and reducing
						inference latency by 30%.
					</>,
				],
				images: [],
			},
			{
				company: "Verizon Communications",
				timeframe: "May 2024 - Aug 2024",
				role: "Full Stack Developer Intern",
				achievements: [
					<>
						Completed 10-week program tackling challenges in LLM
						recreation, server security, containerization, and web
						development.
					</>,
					<>
						Collaborated to develop e-commerce full stack
						application utilizing Java, JavaScript, SQL, Spring
						Boot.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Education",
		institutions: [
			{
				name: "University of Florida",
				description: (
					<>
						Bachelor of Science in Computer Science (Expected May
						2027)
					</>
				),
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "Languages",
				description: (
					<>Python, C++, JavaScript/HTML/CSS, SQL, Go, ARM Assembly</>
				),
				tags: [
					{ name: "Python", icon: "python" },
					{ name: "C++", icon: "cplusplus" },
					{ name: "Go", icon: "golang" },
					{ name: "SQL", icon: "postgresql" },
					{ name: "Java", icon: "java" },
					{ name: "Javascript", icon: "javascript" },
				],
				images: [],
			},
			{
				title: "Tools & Technologies",
				description: (
					<>
						PostgreSQL, NumPy, Pandas, Git, React, Matplotlib,
						Postman, REST APIs, Docker
					</>
				),
				tags: [
					{ name: "PostgreSQL", icon: "postgresql" },
					{ name: "React", icon: "react" },
					{ name: "Docker", icon: "docker" },
					{ name: "Git", icon: "git" },
					{ name: "Postman", icon: "postman" },
				],
				images: [],
			},
		],
	},
}

const blog: Blog = {
	path: "/blog",
	label: "Blog",
	title: "Writing about tech and finance...",
	description: `Read what ${person.name} has been up to recently`,
}

const work: Work = {
	path: "/work",
	label: "Work",
	title: `Projects – ${person.name}`,
	description: `Design and dev projects by ${person.name}`,
}

const gallery: Gallery = {
	path: "/gallery",
	label: "Gallery",
	title: `Photo gallery – ${person.name}`,
	description: `A photo collection by ${person.name}`,
	images: [
		{
			src: withBasePath("/images/gallery/horizontal-1.jpg"),
			alt: "image",
			orientation: "horizontal",
		},
	],
}

export { person, social, newsletter, home, about, blog, work, gallery }
