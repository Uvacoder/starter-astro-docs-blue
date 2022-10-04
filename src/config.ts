export const SITE = {
	title: 'EccentricVamp',
	description: 'EccentricVamp\'s personal website',
	defaultLanguage: 'en_US',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
};

export const EDIT_URL = `https://github.com/EccentricVamp/EccentricVamp.github.io/tree/main`;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
	'Section Header': [
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },
	],
	'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
};
