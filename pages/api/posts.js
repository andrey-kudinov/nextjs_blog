import { client } from "../../lib/client"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const loadPosts = async (start, end) => {
  // | order(publishDate desc) [${start}...${end}], 
  const query = `{
    "posts": *[_type == "post"][${start}...${end}] | order(publishDate desc)  {_id, publishDate, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`
  const { posts, total } = await client.fetch(query)
  
  return { posts, total }
}
