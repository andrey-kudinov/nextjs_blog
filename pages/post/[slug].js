import { Article, Content, Title } from '../../components'
import { client } from '../../lib/client'
import styles from './styles.module.scss'
import { format } from 'date-fns'

const Post = ({ post }) => {
  console.log({ post }, post.publishDate)
  const date = format(new Date(post.publishDate), 'dd MMM yyyy')
  return (
    <Article backUrl='/' className={styles.post}>
      <Title className={styles.title}>{post.title}</Title>
      <p className={styles.date}>{date}</p>
      <Content body={post.body} />
    </Article>
  )
}

export const getStaticPaths = async () => {
  const query = `*[type == "post"] {
    slug {
      current
    }
  }`

  const posts = await client.fetch(query)
  const paths = posts.map(post => {
    params: {
      slug: post.slug.current
    }
  })

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`

  const post = await client.fetch(query)

  return {
    props: { post }
  }
}

export default Post
