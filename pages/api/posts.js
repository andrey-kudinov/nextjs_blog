import { client } from '../../lib/client'

export default async function handler(req, res) {
  const { start, end } = req.query

  if (isNaN(+start) || isNaN(+end)) return res.status(400).end()

  const { posts, total } = await loadPosts(start, end)

  res.status(200).json({ posts, total })
}

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type == "post"][${start}...${end}] | order(publishDate desc)  {_id, publishDate, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`
  const { posts, total } = await client.fetch(query)

  return { posts, total }
}
