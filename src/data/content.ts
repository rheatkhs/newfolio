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
	keywords: 'Warung Jus, KMNF, BugScribe, Resumix, HALOBOX, SotoPremium, Febiadi Wisnu Akbar Projects'
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
		icon: `<svg class="icon ic-social ic-github" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/fbiakbr',
		icon: `<svg class="icon ic-social ic-linkedin" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
	},
	{
		name: 'Website',
		url: 'https://rheatkhs.kmnf.site',
		icon: `<svg class="icon ic-social ic-website" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.93 9h-3.18a15.68 15.68 0 0 0-1.38-5.39A8.03 8.03 0 0 1 19.93 11zM12 4.07c.88 1.5 1.57 3.65 1.83 6.93h-3.66C10.43 7.72 11.12 5.57 12 4.07zM4.07 13h3.18a15.68 15.68 0 0 0 1.38 5.39A8.03 8.03 0 0 1 4.07 13zm3.18-2H4.07a8.03 8.03 0 0 1 4.56-5.39A15.68 15.68 0 0 0 7.25 11zm4.75 8.93c-.88-1.5-1.57-3.65-1.83-6.93h3.66c-.26 3.28-.95 5.43-1.83 6.93zm-2.07-8.93c.24-3.28.93-5.43 1.83-6.93.88 1.5 1.57 3.65 1.83 6.93H9.93zm5.44 7.39a15.68 15.68 0 0 0 1.38-5.39h3.18a8.03 8.03 0 0 1-4.56 5.39z"/></svg>`
	},
	{
		name: 'Email',
		url: 'mailto:rheatkhs@gmail.com',
		icon: `<svg class="icon ic-social ic-email" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.25-8 5-8-5V6l8 5 8-5v2.25z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg class="icon ic-social ic-rss" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><circle cx="6.18" cy="17.82" r="2.18"/><path d="M4 4.44v2.83c9.2 0 12.73 3.53 12.73 12.73h2.83c0-10.76-4.8-15.56-15.56-15.56zm0 5.66v2.83c6.07 0 8.66 2.59 8.66 8.66h2.83c0-7.63-3.86-11.49-11.49-11.49z"/></svg>`
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
	{ content: "Web Apps", dataGroup: "web" },
	{ content: "Security", dataGroup: "security" },
	{ content: "Tools", dataGroup: "tools" },
	{ content: "UI/UX", dataGroup: "ui" },
	{ content: "Marketplace", dataGroup: "brand" },
];
