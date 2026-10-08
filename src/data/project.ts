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

