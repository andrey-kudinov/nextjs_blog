import Head from 'next/head'
import { BuyMeCoffee, Cover, Post, PostGrid, Section, SocialNetworks, Title } from '../components'
import { loadPosts } from './api/posts'
import { useState } from 'react'

const LOAD_MORE_STEP = 2

export default function Home({ initialPosts, total }) {
  console.log({ initialPosts })
  const [posts, setPosts] = useState(initialPosts)
  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta name='description' content='Description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section>
        <Cover title='Andrey <br /> Kudinov' />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map(post => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
      </Section>
    </>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)
  return { props: { initialPosts: posts, total } }
}
