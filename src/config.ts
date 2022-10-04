export const SITE = {
	title: 'EccentricVamp',
	description: 'EccentricVamp\'s personal website',
	language: 'en-US',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
};

export const EDIT_URL = `https://github.com/EccentricVamp/eccentricvamp.github.io/tree/main`;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
	'Section Header': [
		{ text: 'Introduction', link: 'introduction' },
		{ text: 'Page 2', link: 'page-2' },
		{ text: 'Page 3', link: 'page-3' },
	],
	'Another Section': [{ text: 'Page 4', link: 'page-4' }],
};
