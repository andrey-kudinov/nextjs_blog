import Head from 'next/head'
import { Button, BuyMeCoffee, Cover, Post, PostGrid, Section, SocialNetworks, Title } from '../components'
import { loadPosts } from './api/posts'
import { useState } from 'react'

const LOAD_MORE_STEP = 1

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [loading, setLoading] = useState(false)

  const isLoadButton = total > loadedAmount

  const getMorePosts = async () => {
    setLoading(true)

    try {
      const response = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`)
      const data = await response.json()
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
      setPosts([...posts, ...data.posts])
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

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
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)
  return { props: { initialPosts: posts, total } }
}
