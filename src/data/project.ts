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
		title: "PPID Kota Pekalongan",
		title_en: "Public Information & Governance Transparency Portal",
		description: "The official public information service portal for the Government of Pekalongan City, providing online information requests, regulatory document archives, and real-time request tracking.",
		date: "2026-03-25",
		detail: "/detail/ppid",
		url: "https://ppid.pekalongankota.go.id",
		cover: ['cover/cover-ppid.png'],
		tags: ['LARAVEL', 'GOVERNMENT', 'PUBLIC SERVICE', 'BOOTSTRAP']
	},
	{
		title: "Warung Jus",
		title_en: "Neobrutalist Point of Sale System",
		description: "A Neobrutalist POS and real-time sales reporting system designed for local juice vendors, featuring order processing, transaction logging, and QRIS payment integration.",
		date: "2026-03-15",
		detail: "/detail/warung-jus",
		url: "https://warung-jus.vercel.app",
		cover: ['cover/cover-warung-jus.png'],
		tags: ['NEXT.JS', 'TAILWIND', 'POS', 'QRIS']
	},
	{
		title: "KMNF",
		title_en: "High-Performance URL Shortener",
		description: "A fast, reliable, and secure URL shortening microservice capable of handling heavy production redirect requests with sub-15ms latency and real-time geo-analytics.",
		date: "2026-03-17",
		detail: "/detail/kmnf",
		url: "https://kmnf.site",
		cover: ['cover/cover-kmnf.png'],
		tags: ['NODE.JS', 'REDIS', 'EXPRESS', 'REACT']
	},
	{
		title: "BugScribe",
		title_en: "Automated Bug Bounty Reporting Tool",
		description: "Streamlines the workflow of documenting and submitting security vulnerabilities to platforms like HackerOne and Bugcrowd with dynamic CVSS v3.1 calculator and OWASP templates.",
		date: "2026-02-20",
		detail: "/detail/bugscribe",
		url: "https://bugscribe.vercel.app",
		cover: ['cover/cover-bugscribe.png'],
		tags: ['CYBERSECURITY', 'BUG BOUNTY', 'REACT', 'CVSS']
	},
	{
		title: "Resumix",
		title_en: "Customizable Resume & CV Builder",
		description: "A modern, highly customizable CV and resume builder designed to help job seekers create professional applications in minutes with clean typography.",
		date: "2026-01-10",
		detail: "https://resumix.kmnf.site",
		url: "https://resumix.kmnf.site",
		cover: ['cover/cover-resumix.png'],
		tags: ['REACT', 'PRODUCTIVITY', 'RESUME']
	},
	{
		title: "HALOBOX",
		title_en: "Digital Photobooth & Memory Studio",
		description: "A digital photobooth and memory creation platform offering customizable frames, instant captures, and high-quality digital memories.",
		date: "2025-11-05",
		detail: "https://halobox.vercel.app",
		url: "https://halobox.vercel.app",
		cover: ['cover/cover-halobox.png'],
		tags: ['WEB', 'CREATIVE', 'PHOTOBOOTH']
	},
	{
		title: "SotoPremium",
		title_en: "Digital Subscription Marketplace Catalog",
		description: "A premium account marketplace catalog providing secure and verified access to digital subscriptions with direct WhatsApp ordering.",
		date: "2025-09-12",
		detail: "https://sotopremium.wojistudio.id",
		url: "https://sotopremium.wojistudio.id",
		cover: ['cover/cover-sotopremium.png'],
		tags: ['MARKETPLACE', 'CATALOG', 'E-COMMERCE']
	},
];
