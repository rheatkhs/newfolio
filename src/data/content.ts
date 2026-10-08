export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME || "Febiadi Wisnu Akbar",
    siteUrl: import.meta.env.PUBLIC_SITE_URL || "https://rheatkhs.kmnf.site/",
}

interface NavItem {
    label: string;
    href: string;
    target?: string;
}

interface Nav {
    avatar?: string;
    items?: NavItem[];
}

export const nav: Nav = {
	avatar: '/assets/author.png',
    items: [
        { label: 'Home', href: '/', target: '_self' },
        { label: 'Projects', href: '/project', target: '_self' },
        { label: 'About', href: '/about', target: '_self' },
        { label: 'Blog', href: '/blog', target: '_self' },
    ],
};

export const footerText = `© ${new Date().getFullYear()} Febiadi Wisnu Akbar. All Rights Reserved.`

interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}

export const homeTdk: SeoTdk = {
	title: 'Febiadi Wisnu Akbar | Full-stack Developer & Security Enthusiast',
	description: 'Portfolio of Febiadi Wisnu Akbar — Software Engineer specializing in scalable full-stack architectures and security-focused software development.',
	keywords: 'Febiadi Wisnu Akbar, sotostack, Software Engineer, Full-stack Developer, Next.js, TypeScript, React, Flutter, Cybersecurity, Bug Bounty, Web Security'
}

export const blogTdk: SeoTdk = {
	title: 'Blog & Notes | Febiadi Wisnu Akbar',
	description: 'Articles, write-ups, and technical notes on web architecture, software engineering, and cybersecurity.',
	keywords: 'Febiadi Wisnu Akbar, Blog, Software Engineering, Web Development, Cybersecurity, Tech Notes'
}

export const aboutTdk: SeoTdk = {
	title: 'About | Febiadi Wisnu Akbar',
	description: 'Programmer at Dinkominfo Pekalongan specializing in web development, mobile applications, and cybersecurity research.',
	keywords: 'Febiadi Wisnu Akbar, About, Experience, Full-stack Developer, Dinkominfo Pekalongan, Indonesia'
}

export const projectTdk: SeoTdk = {
	title: 'Projects | Febiadi Wisnu Akbar',
	description: 'A complete inventory of tools, applications, and source repositories engineered by Febiadi Wisnu Akbar.',
	keywords: 'Kopi Kenangan, MEVIA 3D, KADIA, NeoStream, Ferrari 296 GT3, Lyricscape, PPID Kota Pekalongan, Pramuka Kota Pekalongan, Brand Experience, F&B, Three.js 3D, EdTech, Legal AI, IPTV, HLS Streaming, WebGL, TextAlive API, Febiadi Wisnu Akbar Projects'
}

export const notFoundTdk: SeoTdk = {
	title: '404 Not Found | Febiadi Wisnu Akbar',
	description: '404 Not Found - The requested page could not be located.',
	keywords: '404 Not Found'
}

export const socialLinks = [
	{
		name: 'Github',
		url: 'https://github.com/rheatkhs',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="icon ic-social ic-github"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"/></svg>`
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/fbiakbr',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="icon ic-social ic-linkedin"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/></svg>`
	},
	{
		name: 'Website',
		url: 'https://rheatkhs.kmnf.site',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="icon ic-social ic-website"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"/></svg>`
	},
	{
		name: 'Email',
		url: 'mailto:rheatkhs@gmail.com',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="icon ic-social ic-email"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="icon ic-social ic-rss"><path d="M106.91,149.09A71.53,71.53,0,0,1,128,200a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,106.91,149.09ZM56,80a8,8,0,0,0,0,16A104,104,0,0,1,160,200a8,8,0,0,0,16,0A120,120,0,0,0,56,80Zm118.79,1.21A166.9,166.9,0,0,0,56,32a8,8,0,0,0,0,16A151,151,0,0,1,163.48,92.52,151,151,0,0,1,208,200a8,8,0,0,0,16,0A166.9,166.9,0,0,0,174.79,81.21ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Z"/></svg>`
	},
];

interface PageTag {
	index: string
	about: string
	blog: string
	project: string
}
export const pageTag: PageTag = {
	index: 'PORTFOLIO',
	about: 'ABOUT',
	blog: 'BLOG',
	project: 'PROJECTS'
}

interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: "Software Engineer specializing in scalable full-stack web & mobile architectures with a security-first engineering mindset. Passionate about building high-performance systems and resilient digital experiences.",
	project: "A complete inventory of tools, applications, and source repositories I've engineered.",
	about: 'Full-stack Developer and Security Enthusiast building premium digital experiences and secure systems.',
	blog: 'Articles, write-ups, and technical notes on web architecture, software engineering, and cybersecurity.',
}

export interface FilterItem {
	content: string
	dataGroup: string
}
export const filterItems: FilterItem[] = [
	{ content: "💎 Featured", dataGroup: "recommend" },
	{ content: "Brand & Commerce", dataGroup: "brand" },
	{ content: "AI & Tools", dataGroup: "ai" },
	{ content: "Streaming & Media", dataGroup: "media" },
	{ content: "3D & Creative", dataGroup: "3d" },
	{ content: "Government", dataGroup: "government" },
	{ content: "Education & Community", dataGroup: "community" },
	{ content: "All Web", dataGroup: "web" },
];
