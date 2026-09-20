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
			provider: fontProviders.google(),
			name: 'Zen Kaku Gothic New',
			cssVariable: '--font-zen-kaku',
			fallbacks: ['sans-serif'],
			weights: [400, 500, 700],
			styles: ['normal'],
		},
		{
			provider: fontProviders.google(),
			name: 'Zen Dots',
			cssVariable: '--font-zen-dots',
			fallbacks: ['sans-serif'],
			weights: [400],
			styles: ['normal'],
		},
		{
			provider: fontProviders.google(),
			name: 'Zen Tokyo Zoo',
			cssVariable: '--font-zen-tokyo-zoo',
			fallbacks: ['sans-serif'],
			weights: [400],
			styles: ['normal'],
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
				{ icon: 'email', label: 'Email', href: 'mailto:contact@jackwalton.net' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/jackspencerwalton/' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/jspencerwalton' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/jackspencerwalton' },
			],
			sidebar: [
				{
					label: 'VENU',
					items: [
						{ label: 'Case Study', slug: 'venu' },
						{ label: 'User Guide', slug: 'venu/guide' },
						{ label: 'Release Notes', slug: 'venu/release-notes' },
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
						{ label: 'Release Notes Generator', slug: 'ai/release-notes' },
					],
				},
				{
					label: 'Academia',
					items: [
						{ label: 'Academic Work', slug: 'academia' },
						{ label: 'Music Information Retrieval in Bandcamp', slug: 'academia/bandcamp' },
						{ label: "St. Didier's Flowering Verge", slug: 'academia/different-visions' },
						{ label: 'A Quantitative Analysis of the Royer Didier', slug: 'academia/daedalus' },
						{ label: 'Summer Undergraduate Research Opportunity Proposal', slug: 'academia/grant-proposal' },
					],
				},
				{
					label: 'Blog',
					link: 'https://suburbanrunaway.xyz',
				},
			],
		}),
	],
});