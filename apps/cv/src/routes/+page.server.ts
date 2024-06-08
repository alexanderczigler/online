import type { Position } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/positions')
	const positions: Position[] = await response.json()
	return { positions }
}
