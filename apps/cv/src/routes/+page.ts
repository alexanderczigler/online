import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const post = await import('../../../../content/cv.md');

		return {
			content: post.default
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Could not load CV.`);
	}
}
