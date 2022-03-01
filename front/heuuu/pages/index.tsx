import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { article } from '../../../back/api/src/schema/article'

type article = {
  id?: number
  private?: boolean
  on?: string
  title?: string
  data?: string
}

/*export const getServerSideProps = async () => {
  const articles = (
    await (
      await fetch('http://localhost:3010/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `{ articles{id private on title data }}`,
        }),
      })
    ).json()
  ).data.articles as article[]

  //console.dir(JSON.parse(articles[0]?.data || ''), { depth: undefined })
  return {
    props: {
      articles,
    },
  }
}*/

function Home(/*props: InferGetServerSidePropsType<typeof getServerSideProps>*/) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatounerie</title>
        <meta name="description" content="Miaou :3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="master">
          <h1 className="master-title">Heuuu</h1>

          <a>Coucou</a>
          <a>Coucou</a>
          <a>Couyou</a>
          <a>Coucou</a>
        </div>
        <article></article>
      </main>
    </div>
  )
}

export default Home
