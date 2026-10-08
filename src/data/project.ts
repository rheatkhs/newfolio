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
		title: "Valentine's Day 3D Assets",
		title_en: "Blender 3D Asset Library",
		description: "A comprehensive 3D asset pack designed for web applications and seasonal campaigns.",
		date: "2024-10-15",
		detail: "/detail/free-3d-valentines-assets/",
		url: "https://valentine.uiuxdeck.com/",
		cover: [
			'free-3d-valentines-assets/01.jpg',
			'free-3d-valentines-assets/02.jpg',
			'free-3d-valentines-assets/03.jpg',
			'free-3d-valentines-assets/04.jpg',
		],
		tags: ['3D', 'WEB', 'ASSETS']
	},
	{
		title: "Online Todo List Application",
		title_en: "Productivity Web App",
		description: "Lightweight, responsive task management tool with browser local storage persistence.",
		date: "2024-10-15",
		detail: "/detail/todo",
		url: "https://todo.uiineed.com/",
		cover: ['cover/cover-todo.jpg'],
		tags: ['WEB', 'PRODUCTIVITY', 'JS']
	},
	{
		title: "Tink Travel Life Journal",
		title_en: "Mobile-First Journal App",
		description: "Interactive travel notes and photo diary web application with smooth micro-interactions.",
		date: "2024-10-15",
		url: "https://travellife.zeabur.app/",
		detail: "/detail/tinklife",
		cover: [
			'travel/01.jpg',
			'travel/02.jpg',
			'travel/03.jpg',
			'travel/04.jpg'
		],
		tags: ['WEB', 'MOBILE', 'UI']
	},
];
