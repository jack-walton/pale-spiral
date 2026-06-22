// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jackwalton.xyz',
	integrations: [
		starlight({
			components: {
				Head: './src/components/Head.astro',
			},
			title: 'Jack Walton',
			description: 'Jack Spencer Walton',
			customCss: ['./src/styles/global.css'],
			favicon: '/icons/icon.svg',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-sans/Geist-Variable.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-mono/GeistMono-Variable.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-pixel/GeistPixel-Square.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						href: '/icons/apple-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/icons/site.webmanifest',
					},
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/jack-walton' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jackspencerwalton/' },
			],
			sidebar: [
				{ label: 'Introduction', slug: '' },
				{ label: 'Oracle', slug: 'oracle' },
				{
					label: 'VENU Guide',
					items: [
						{ label: 'VENU Overview', slug: 'venu' },
						{ label: 'Navigate the App', slug: 'venu/navigate-the-app' },
						{ label: 'Create an Account', slug: 'venu/create-an-account' },
						{ label: 'Sign In', slug: 'venu/sign-in' },
						{ label: 'Search for Events', slug: 'venu/search-for-events' },
						{ label: 'Buy Tickets', slug: 'venu/buy-tickets' },
					],
				},
				{ label: 'St. Didier', slug: 'saint-didier' },
				{
					label: 'Prompt Library',
					items: [
						{ label: 'Prompt Library Overview', slug: 'ai' },
						{ label: 'Change Log Generator', slug: 'ai/change-log' },
						{ label: 'Vale Rule Generator', slug: 'ai/vale-rule' },
						{ label: 'DITA Task Scaffold', slug: 'ai/dita-task' },
						{ label: 'Quality Assurance', slug: 'ai/qa' },
					],
				},
				{ label: 'Resume', slug: 'resume' },
				{ label: 'Change Log', slug: 'changelog'
				}
			],
		}),
	],
});
