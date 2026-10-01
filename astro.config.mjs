// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * Vite marks hashed assets `no-store` in `astro dev`. That makes
 * `font-display: optional` fail on every first paint. Cache the two
 * latin webfonts in the browser during local development only.
 *
 * @returns {NonNullable<NonNullable<import('astro').AstroUserConfig['vite']>['plugins']>[number]}
 */
function cacheFontsInDev() {
	return {
		name: 'cache-fonts-in-dev',
		apply: 'serve',
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				if (req.url && /\.woff2(?:$|\?)/.test(req.url)) {
					res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
				}
				next();
			});
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://www.techcomm.dev',
	vite: {
		plugins: [cacheFontsInDev()],
	},
	integrations: [
		starlight({
			components: {
				Head: './src/components/Head.astro',
				Hero: './src/components/Hero.astro',
			},
			title: 'techcomm.dev',
			description: 'Jack Walton is a technical writer in New York City.',
			customCss: ['./src/styles/global.css'],
			favicon: '/icons/icon.svg',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://www.techcomm.dev/icons/social-preview.png' },
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
					attrs: { name: 'twitter:image', content: 'https://www.techcomm.dev/icons/social-preview.png' },
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
				{ icon: 'email', label: 'Email', href: 'mailto:jack@techcomm.dev' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/jackspencerwalton/' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/techcommdotdev' },
			],
			sidebar: [
				{ label: 'Work', slug: 'projects' },
				{ label: 'Oracle', slug: 'oracle' },
				{
					label: 'VENU',
					items: [
						{ label: 'Case Study', slug: 'venu' },
						{ label: 'User Guide', slug: 'venu/guide' },
						{ label: 'Release Notes', slug: 'venu/release-notes' },
					],
				},
			],
		}),
	],
});
