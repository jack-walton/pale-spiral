// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jackwalton.net',
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
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://jackwalton.net/icons/social-preview.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:width', content: '1200' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:height', content: '630' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://jackwalton.net/icons/social-preview.png' },
				},
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
				{
					label: 'VENU Guide',
					items: [
						{ label: 'VENU Overview', slug: 'venu' },
						// Uncomment when the case study leaves draft (also remove
						// `draft: true` from its frontmatter and restore the card
						// in venu/index.mdx):
						// { label: 'Case Study', slug: 'venu/case-study' },
						{ label: 'Navigate the App', slug: 'venu/navigate-the-app' },
						{ label: 'Create an Account', slug: 'venu/create-an-account' },
						{ label: 'Sign In', slug: 'venu/sign-in' },
						{ label: 'Search for Events', slug: 'venu/search-for-events' },
						{ label: 'Buy Tickets', slug: 'venu/buy-tickets' },
					],
				},
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
				{ label: 'Resume', slug: 'resume' }
			],
		}),
	],
});