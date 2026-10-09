export interface CertificateItem {
	id: string;
	title: string;
	issuer: string;
	organization: string;
	credentialId: string;
	issueDate: string;
	hours?: string;
	category: string;
	badge: string;
	skills: string[];
	image: string;
	pdfUrl: string;
	verifyUrl?: string;
}

export const certificates: CertificateItem[] = [
	{
		id: "cybersecurity-google-komdigi",
		title: "Fundamental Cybersecurity - DEX - Google",
		issuer: "Google & KOMDIGI",
		organization: "Pusat Pengembangan Talenta Digital (DTA) - Komdigi",
		credentialId: "21212830840-389/DTA/BLSDM.Komdigi/2026",
		issueDate: "September 2026",
		hours: "10 Jam Pelatihan",
		category: "Cybersecurity",
		badge: "Google & KOMDIGI",
		skills: [
			"Keamanan Siber",
			"Perlindungan Ancaman & Risiko",
			"Analisis Kerentanan",
			"Alat Bantu & Python Keamanan"
		],
		image: "/assets/certificates/cybersecurity-google-komdigi.png",
		pdfUrl: "/assets/certificates/cybersecurity-google-komdigi.pdf"
	},
	{
		id: "intermediate-network-admin",
		title: "Intermediate Associate Network Administrator",
		issuer: "KOMDIGI (Kementerian Komunikasi dan Digital)",
		organization: "Digital Talent Academy - DTS 2026",
		credentialId: "21212088840-3173/DTA/BLSDM.Komdigi/2026",
		issueDate: "September 2026",
		hours: "12 Jam Pelatihan",
		category: "Network Engineering",
		badge: "National Standard",
		skills: [
			"Merancang Keamanan Jaringan",
			"Disaster Recovery & Pemulihan Jaringan",
			"Routing Antar Autonomous System (AS)",
			"Monitoring & Keamanan Akun Pengguna"
		],
		image: "/assets/certificates/intermediate-network-admin-komdigi.png",
		pdfUrl: "/assets/certificates/intermediate-network-admin-komdigi.pdf"
	},
	{
		id: "fundamental-network-admin",
		title: "Fundamental of Associate Network Administrator",
		issuer: "KOMDIGI (Kementerian Komunikasi dan Digital)",
		organization: "Digital Talent Academy - DTS 2026",
		credentialId: "21212087840-11249/DTA/BLSDM.Komdigi/2026",
		issueDate: "September 2026",
		hours: "12 Jam Pelatihan",
		category: "Network Engineering",
		badge: "National Standard",
		skills: [
			"Pengalamatan Jaringan & Subnetting",
			"Infrastruktur Jaringan Nirkabel",
			"Konfigurasi Switch & VLAN",
			"Routing Dalam Satu Autonomous System (AS)"
		],
		image: "/assets/certificates/fundamental-network-admin-komdigi.png",
		pdfUrl: "/assets/certificates/fundamental-network-admin-komdigi.pdf"
	},
	{
		id: "ai-productivity-hacktiv8",
		title: "AI Productivity and AI API Integration for Developers",
		issuer: "Hacktiv8 Indonesia",
		organization: "AI Opportunity Fund: Asia-Pacific (Google.org & ADB)",
		credentialId: "10383/H8/CSR/MBA2/IX/2026",
		issueDate: "September 2026",
		hours: "10 Hours",
		category: "Artificial Intelligence",
		badge: "Google.org Supported",
		skills: [
			"AI API Integration",
			"Developer Productivity",
			"Prompt Engineering",
			"Capstone AI Project"
		],
		image: "/assets/certificates/ai-productivity-hacktiv8.png",
		pdfUrl: "/assets/certificates/ai-productivity-hacktiv8.pdf"
	},
	{
		id: "juara-vibe-coding-gdg",
		title: "#JuaraVibeCoding Study Jam Completion",
		issuer: "Google Developer Groups (GDG)",
		organization: "Google Developer Ecosystem",
		credentialId: "JVC2605-QQBQ-XT6H",
		issueDate: "Mei 2026",
		category: "AI & Modern Development",
		badge: "Google Developer Groups",
		skills: [
			"Vibe Coding",
			"Rapid AI Prototyping",
			"Code Less, Build More",
			"Modern Web Engineering"
		],
		image: "/assets/certificates/juara-vibe-coding-gdg.png",
		pdfUrl: "/assets/certificates/juara-vibe-coding-gdg.pdf",
		verifyUrl: "https://goo.gle/jvc-cert-verifier"
	}
];

export interface RecognitionItem {
	id: string;
	title: string;
	organization: string;
	issuerTitle?: string;
	signer?: string;
	credentialId: string;
	issueDate: string;
	category: string;
	badge: string;
	statement: string;
	skills: string[];
	image: string;
	pdfUrl: string;
}

export const securityRecognitions: RecognitionItem[] = [
	{
		id: "giken-kaizen-security",
		title: "Certificate of Appreciation — Security Contribution",
		organization: "PT Giken Kaizen Educenter",
		signer: "Difa Aufar Hakim, S.S (Chief Executive Officer)",
		credentialId: "001/ITRGT-GKE/CERT/IV/2026",
		issueDate: "April 20, 2026",
		category: "Vulnerability Disclosure & Security",
		badge: "Security Hall of Fame",
		statement: "For the valuable support and contribution extended toward strengthening the security and reliability of PT Giken Kaizen Educenter digital systems, fostering a safer and more reliable digital environment.",
		skills: [
			"Vulnerability Assessment",
			"Responsible Disclosure",
			"Web Application Security",
			"System Hardening"
		],
		image: "/assets/certificates/security-appreciation-giken-kaizen.png",
		pdfUrl: "/assets/certificates/security-appreciation-giken-kaizen.pdf"
	}
];
