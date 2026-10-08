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
		title: "Noir",
		title_en: "Autonomous Multi-Agent Penetration Testing Framework",
		description: "An autonomous multi-agent security testing framework designed for OpenCode, coordinating specialized AI agents to perform reconnaissance, vulnerability scanning, and ethical exploit verification in isolated sandboxes.",
		date: "2026-04-07",
		detail: "/d/4b8e2f1a",
		url: "https://github.com/rheatkhs/noir",
		cover: ['cover/cover-noir.png'],
		tags: ['PYTHON', 'CYBERSECURITY', 'MULTI-AGENT AI', 'PENTESTING', 'DOCKER']
	},
	{
		title: "Ferrari 296 GT3",
		title_en: "Interactive 3D WebGL Digital Showcase & Configurator",
		description: "An immersive real-time 3D web experience dedicated to the Ferrari 296 GT3 racing machine, featuring photorealistic PBR materials, custom GLSL shaders, camera choreography, and interactive aerodynamics breakdown.",
		date: "2026-04-06",
		detail: "/d/a9f2c8d1",
		url: "https://2960-gt3.vercel.app",
		cover: ['cover/cover-2960-gt3.png'],
		tags: ['THREE.JS', 'WEBGL', 'REACT', 'GLTF', '3D EXPERIENCE']
	},
	{
		title: "KADIA",
		title_en: "Knowledge-Based Assistant for Drafting Institutional Acts",
		description: "An AI-powered legal technology platform designed for municipal government institutions to draft, harmonize, and validate legal products using Multi-Agent AI and strict Qdrant vector RAG.",
		date: "2026-04-05",
		detail: "/d/e4b1a7d2",
		url: "https://dev-kadia.pekalongankota.go.id",
		cover: ['cover/cover-kadia.png'],
		tags: ['AI', 'MULTI-AGENT', 'QDRANT RAG', 'LEGAL TECH', 'LARAVEL']
	},
	{
		title: "NeoStream",
		title_en: "Modern Web-Based IPTV & HLS Streaming Platform",
		description: "A sleek, browser-native IPTV streaming client capable of parsing remote and local M3U playlists, streaming low-latency HLS/m3u8 live video feeds, rendering EPG electronic program guides, and bypassing CORS restrictions seamlessly.",
		date: "2026-04-04",
		detail: "/d/c8f2b0e4",
		url: "https://neostream-inky.vercel.app",
		cover: ['cover/cover-neostream.png'],
		tags: ['HLS.JS', 'IPTV', 'REACT', 'TAILWIND', 'M3U STREAMING']
	},
	{
		title: "Kopi Kenangan",
		title_en: "Brand Showcase & Digital Experience Portal",
		description: "An interactive brand experience and digital product catalog for Kopi Kenangan, celebrating Indonesia's premier grab-and-go coffee chain with interactive origin stories, product showcases, and retail store integrations.",
		date: "2026-04-03",
		detail: "/d/d7a3f8c5",
		url: "https://kopken.mevia.web.id",
		cover: ['cover/cover-kopken.png'],
		tags: ['REACT', 'BRAND EXPERIENCE', 'UI/UX', 'TAILWIND', 'F&B']
	},
	{
		title: "censorship-id",
		title_en: "Robust Indonesian Profanity & Evasion Filter Library",
		description: "A high-performance, zero-dependency npm package for detecting and sanitizing Indonesian profanity with smart leetspeak evasion handling, severity classification, and full TypeScript support.",
		date: "2026-04-02",
		detail: "/d/1f8a9e2c",
		url: "https://www.npmjs.com/package/censorship-id",
		cover: ['cover/cover-censorship.png'],
		tags: ['NPM PACKAGE', 'TYPESCRIPT', 'OPEN SOURCE', 'NLP / TEXT', 'SECURITY']
	},
	{
		title: "Project 39: Lyricscape",
		title_en: "Kinetic Lyric Visualizer & Real-time Canvas Experience",
		description: "A creative web audio application built for the Hatsune Miku Magical Mirai 2026 programming contest, combining the TextAlive API, HTML5 Canvas particle physics, and synchronized kinetic typography.",
		date: "2026-03-28",
		detail: "/d/39e1b4f6",
		url: "https://project-39-lyricscape.vercel.app",
		cover: ['cover/cover-lyricscape.png'],
		tags: ['TEXTALIVE API', 'CANVAS', 'AUDIO VISUALIZER', 'TYPESCRIPT', 'CREATIVE TECH']
	},
	{
		title: "SIGAP Kota Pekalongan",
		title_en: "Government Internship Information & Governance System",
		description: "The official government internship management platform for the City of Pekalongan, modernizing cross-department internship placements across 31 OPD units, live performance appraisal tracking, and digital certificate verification.",
		date: "2026-03-25",
		detail: "/d/b2f8a9c3",
		url: "https://sigap.pekalongankota.go.id",
		cover: ['cover/cover-sigap.png'],
		tags: ['LARAVEL', 'GOVERNMENT', 'PUBLIC SERVICE', 'DINKOMINFO', 'TAILWIND']
	},
	{
		title: "PPID Kota Pekalongan",
		title_en: "Public Information & Governance Transparency Portal",
		description: "The official public information service portal for the Government of Pekalongan City, providing online information requests, regulatory document archives, and real-time request tracking.",
		date: "2026-03-22",
		detail: "/d/7d4e1b8a",
		url: "https://ppid.pekalongankota.go.id",
		cover: ['cover/cover-ppid.png'],
		tags: ['LARAVEL', 'GOVERNMENT', 'PUBLIC SERVICE', 'BOOTSTRAP']
	},
	{
		title: "Pramuka Kota Pekalongan",
		title_en: "Official Scout Movement Information & Registry Portal",
		description: "Official digital portal of Kwarcab Pekalongan serving as the central scouting communications and leadership registry hub with event management and news distribution.",
		date: "2026-03-20",
		detail: "/d/f8a2c5d9",
		url: "https://pramukakotapekalongan.or.id",
		cover: ['cover/cover-pramuka.png'],
		tags: ['LARAVEL', 'TAILWIND', 'COMMUNITY', 'ALPINE.JS']
	},
];
