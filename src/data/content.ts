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
	description: 'Personal portfolio of Febiadi Wisnu Akbar (sotostack), Programmer at Dinkominfo Pekalongan specialized in Next.js, Flutter, and Bug Bounty Hunting.',
	keywords: 'Febiadi Wisnu Akbar, sotostack, Dinkominfo Pekalongan, Full-stack Developer, Next.js Developer, Flutter, Bug Bounty, Security, Pekalongan, Indonesia'
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
		icon: `<svg t="1730125604816" class="icon ic-github ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12741" width="256" height="256"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="12742"></path></svg>`
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/fbiakbr',
		icon: `<svg class="icon ic-social" viewBox="0 0 24 24" width="256" height="256" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
	},
	{
		name: 'Website',
		url: 'https://rheatkhs.kmnf.site',
		icon: `<svg class="icon ic-social" viewBox="0 0 24 24" width="256" height="256" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
	},
	{
		name: 'Email',
		url: 'mailto:rheatkhs@gmail.com',
		icon: `<svg class="icon ic-social" viewBox="0 0 24 24" width="256" height="256" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
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
	index: "I'm Febiadi Wisnu Akbar, a Programmer at DINKOMINFO Kota Pekalongan. Specialized in web & mobile development with a keen eye for security research and bug bounty hunting.",
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
