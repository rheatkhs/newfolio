export interface DesignItem {
	id: string;
	title: string;
	subtitle: string;
	category: string;
	categorySlug: string;
	year: string;
	image: string;
	tags: string[];
	description: string;
	aspectRatio?: string;
}

export const designItems: DesignItem[] = [
	{
		id: "tracing-a-dream",
		title: "Tracing A Dream",
		subtitle: "YOASOBI / Lilas Ikuta Tribute Poster",
		category: "Music & Poster Art",
		categorySlug: "poster",
		year: "2024",
		image: "/assets/design/tracing-a-dream.jpg",
		aspectRatio: "1/1",
		tags: ["POSTER DESIGN", "MUSIC ART", "TYPOGRAPHY", "YOASOBI", "VINTAGE HALFTONE"],
		description: "Retro-modern conceptual poster art tribute for YOASOBI's hit single 'Tracing A Dream' (あの夢をなぞって) featuring vocalist Lilas Ikuta with vintage halftones, Japanese typography, and paper texture compositing."
	},
	{
		id: "yamada-ryo",
		title: "Yamada Ryo",
		subtitle: "Bocchi the Rock! Graphic Composition",
		category: "Character Graphic Art",
		categorySlug: "character",
		year: "2024",
		image: "/assets/design/yamada-ryo.jpg",
		aspectRatio: "1/1",
		tags: ["ANIME GRAPHICS", "GRID LAYOUT", "NEON PALETTE", "BOCCHI THE ROCK", "TYPOGRAPHY"],
		description: "Vibrant blue and electric yellow graphic banner dedicated to Yamada Ryo from Bocchi the Rock!, featuring architectural grid guidelines, signature calligraphy, and high-contrast multi-frame perspective crops."
	},
	{
		id: "garnacho-matchday",
		title: "Alejandro Garnacho",
		subtitle: "Manchester United Matchday Poster",
		category: "Sports Graphics",
		categorySlug: "sports",
		year: "2024",
		image: "/assets/design/garnacho-matchday.jpg",
		aspectRatio: "1/1",
		tags: ["SPORTS POSTER", "MANCHESTER UNITED", "PREMIER LEAGUE", "COMPOSITING", "MATCHDAY"],
		description: "High-octane Premier League matchday promotional poster design celebrating Manchester United winger Alejandro Garnacho against Bournemouth, utilizing topographic line vectors, dynamic split photography, and aggressive athletic energy."
	},
	{
		id: "uncertain-unknown",
		title: "Uncertain / Unknown",
		subtitle: "Editorial Typography & Fear Concept",
		category: "Editorial & Typography",
		categorySlug: "editorial",
		year: "2023",
		image: "/assets/design/uncertain-unknown.jpg",
		aspectRatio: "1/1",
		tags: ["EDITORIAL POSTER", "SWISS TYPOGRAPHY", "VINTAGE HALFTONE", "CONCEPTUAL ART"],
		description: "Experimental editorial poster design exploring psychological tension and fear through distressed crimson typography, layered Swiss style grid elements, halftone textures, and delicate hand calligraphy."
	}
];

export const designCategories = [
	{ label: "All Artworks", slug: "all" },
	{ label: "Poster Art", slug: "poster" },
	{ label: "Character Art", slug: "character" },
	{ label: "Sports Graphics", slug: "sports" },
	{ label: "Editorial", slug: "editorial" },
];
