import { json } from '@sveltejs/kit'
import type { Position } from '$lib/types'

async function getPositions() {
  let positions: Position[] = []

	const paths = import.meta.glob('../../../../../../content/cv/positions/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Position, 'slug'>
			const post = { ...metadata } satisfies Position
			positions.push(post)
		}
	}

	positions = positions.sort((first, second) =>
    (second.to ?? 9999) - (first.to ?? 9999)
	)

	return positions
}

export async function GET() {
	const posts = await getPositions()
	return json(posts)
}
