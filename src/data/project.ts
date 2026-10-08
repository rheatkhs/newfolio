export interface ProjectItem {
	id?: number;
	title: string;
	title_en?: string;
	description?: string;
	date?: string;
	detail?: string;
	url?: string;
	tags?: string[];
	cover?: string[];
}

export const projectItems: ProjectItem[] = [
	{
		title: "KADIA",
		title_en: "Knowledge-Based Assistant for Drafting Institutional Acts",
		description: "An AI-powered legal technology platform designed for municipal government institutions to draft, harmonize, and validate legal products using Multi-Agent AI and strict Qdrant vector RAG.",
		date: "2026-03-28",
		detail: "/detail/kadia",
		url: "https://dev-kadia.pekalongankota.go.id",
		cover: ['cover/cover-kadia.png'],
		tags: ['AI', 'MULTI-AGENT', 'QDRANT RAG', 'LEGAL TECH', 'LARAVEL']
	},
	{
		title: "Ferrari 296 GT3",
		title_en: "Interactive 3D WebGL Digital Showcase & Configurator",
		description: "An immersive real-time 3D web experience dedicated to the Ferrari 296 GT3 racing machine, featuring photorealistic PBR materials, custom GLSL shaders, camera choreography, and interactive aerodynamics breakdown.",
		date: "2026-03-26",
		detail: "/detail/2960-gt3",
		url: "https://2960-gt3.vercel.app",
		cover: ['cover/cover-2960-gt3.png'],
		tags: ['THREE.JS', 'WEBGL', 'REACT', 'GLTF', '3D EXPERIENCE']
	},
	{
		title: "Project 39: Lyricscape",
		title_en: "Kinetic Lyric Visualizer & Real-time Canvas Experience",
		description: "A creative web audio application built for the Hatsune Miku Magical Mirai 2026 programming contest, combining the TextAlive API, HTML5 Canvas particle physics, and synchronized kinetic typography.",
		date: "2026-03-24",
		detail: "/detail/lyricscape",
		url: "https://project-39-lyricscape.vercel.app",
		cover: ['cover/cover-lyricscape.png'],
		tags: ['TEXTALIVE API', 'CANVAS', 'AUDIO VISUALIZER', 'TYPESCRIPT', 'CREATIVE TECH']
	},
	{
		title: "PPID Kota Pekalongan",
		title_en: "Public Information & Governance Transparency Portal",
		description: "The official public information service portal for the Government of Pekalongan City, providing online information requests, regulatory document archives, and real-time request tracking.",
		date: "2026-03-22",
		detail: "/detail/ppid",
		url: "https://ppid.pekalongankota.go.id",
		cover: ['cover/cover-ppid.png'],
		tags: ['LARAVEL', 'GOVERNMENT', 'PUBLIC SERVICE', 'BOOTSTRAP']
	},
	{
		title: "Pramuka Kota Pekalongan",
		title_en: "Official Scout Movement Information & Registry Portal",
		description: "Official digital portal of Kwarcab Pekalongan serving as the central scouting communications and leadership registry hub with event management and news distribution.",
		date: "2026-03-20",
		detail: "/detail/pramuka",
		url: "https://pramukakotapekalongan.or.id",
		cover: ['cover/cover-pramuka.png'],
		tags: ['LARAVEL', 'TAILWIND', 'COMMUNITY', 'ALPINE.JS']
	},
];
