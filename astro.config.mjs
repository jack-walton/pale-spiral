// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jackwalton.xyz',
	integrations: [
		starlight({
			title: 'Jack Walton',
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
					label: 'AXS Guide',
					items: [
						{ label: 'Overview of the AXS App', slug: 'axs' },
						{ label: 'Navigate the App', slug: 'axs/navigate-the-app' },
						{ label: 'Create an Account', slug: 'axs/create-an-account' },
						{ label: 'Sign In', slug: 'axs/sign-in' },
						{ label: 'Search for Events', slug: 'axs/search-for-events' },
						{ label: 'Buy Tickets', slug: 'axs/buy-tickets' },
					],
				},
				{ label: 'Bandcamp', slug: 'bandcamp' },
				{
					label: 'Prompt Engineering',
					items: [
						{ label: 'Overview', slug: 'ai' },
						{ label: 'Change Log Generator', slug: 'ai/change-log' },
					],
				},
				{ label: 'Resume', slug: 'resume' },
				{ label: 'Change Log', slug: 'changelog'
				}
			],
		}),
	],
});
