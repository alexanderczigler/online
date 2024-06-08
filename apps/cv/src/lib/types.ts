export type Category = 'position' | 'project'

export type Position = {
  // Meta.
	category: Category
	
  // Content.
  title: string
  employer: string
	from: number
  to?: number
  url?: string
}
