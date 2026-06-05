// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jack Walton',
			favicon: '/icons/icon.svg',
			head: [
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jack-walton' }],
			components: {
				Head: './src/components/Head.astro',
				Search: './src/components/Search.astro',
			},
			sidebar: [
				{ label: 'Introduction', slug: '' },
				{
					label: 'AXS Guide',
					items: [
						{ label: 'Overview', slug: 'axs' },
						{ label: 'Navigate the App', slug: 'axs/navigate-the-app' },
						{ label: 'Create an Account', slug: 'axs/create-an-account' },
						{ label: 'Sign In', slug: 'axs/sign-in' },
						{ label: 'Search for Events', slug: 'axs/search-for-events' },
						{ label: 'Buy Tickets', slug: 'axs/buy-tickets' },
					],
				},
				{
					label: 'Prompt Engineering',
					items: [
						{ label: 'Overview', slug: 'ai' },
						{ label: 'Change Log Generator', slug: 'ai/change-log' },
					],
				},
				{ label: 'Music Information Retrieval in Bandcamp', slug: 'bandcamp' },
				{ label: 'Resume', slug: 'resume' },
				{ label: 'Change Log', slug: 'changelog' },
			],
		}),
	],
});
