// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * The dev server serves /_astro/fonts/* with `no-store`, so every page load
 * re-downloads the fonts and `font-display: optional` can lose the race to
 * first paint, flashing the fallback fonts. The URLs are content-hashed, so
 * let the browser cache them during dev. Production output is unaffected.
 *
 * @returns {NonNullable<NonNullable<import('astro').AstroUserConfig['vite']>['plugins']>[number]}
 */
function devFontCache() {
	return {
		name: 'dev-font-cache',
		apply: 'serve',
		configureServer(server) {
			return () => {
				server.middlewares.stack.unshift({
					route: '',
					handle(req, res, next) {
						if (req.url?.startsWith('/_astro/fonts/')) {
							const setHeader = res.setHeader.bind(res);
							res.setHeader = (name, value) =>
								setHeader(name, /^cache-control$/i.test(name) ? 'public, max-age=3600' : value);
						}
						next();
					},
				});
			};
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://jackwalton.net',
	vite: {
		plugins: [devFontCache()],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Geist',
			cssVariable: '--font-geist-sans',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						weight: '100 900',
						style: 'normal',
						src: ['./src/assets/fonts/geist-sans/Geist-Variable.woff2'],
						display: 'optional',
					},
					{
						weight: '100 900',
						style: 'italic',
						src: ['./src/assets/fonts/geist-sans/Geist-Italic-Variable.woff2'],
						display: 'optional',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						weight: '100 900',
						style: 'normal',
						src: ['./src/assets/fonts/geist-mono/GeistMono-Variable.woff2'],
						display: 'optional',
					},
					{
						weight: '100 900',
						style: 'italic',
						src: ['./src/assets/fonts/geist-mono/GeistMono-Italic-Variable.woff2'],
						display: 'optional',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Geist Pixel Square',
			cssVariable: '--font-geist-pixel',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						weight: 400,
						style: 'normal',
						src: ['./src/assets/fonts/geist-pixel/GeistPixel-Square.woff2'],
						display: 'optional',
					},
				],
			},
		},
	],
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