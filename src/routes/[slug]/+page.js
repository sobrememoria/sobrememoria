import { error } from '@sveltejs/kit';
export const prerender = true;
export async function load({ params }) {
	try {
		const post = await import(`../pages/${params.slug}.svx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const imageModules = await import.meta.glob(`../pages/*.svx`);
	console.log()
	for (const modulePath in imageModules) {
		imageModules[modulePath]().then(({ default: imageUrl }) => {
			console.log(modulePath, imageUrl);
		});
	}
	return [
		{ slug: "a-recuperacao" },
		{ slug: "creditos" },
		{ slug: "documentario" },
		{ slug: "o-processo" },
		{ slug: "passo-a-passo" },
		{ slug: "quem-e-quem" },

	];
}

