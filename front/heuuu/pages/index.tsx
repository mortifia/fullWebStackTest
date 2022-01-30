import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import internal from 'stream'
import { article } from '../../../back/api/src/schema/article'

type article = {
  id: number
  on: string
  text: string
}

export const getServerSideProps = async () => {
  const articles = (
    await (
      await fetch('http://localhost:3010/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `{ articles{ id on text}}` }),
      })
    ).json()
  ).data.articles as article[]
  return {
    props: {
      articles,
    },
  }
}

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dateTimezone = (date: string) => {
    const old = new Date(date)
    return new Date(old.getTime() - old.getTimezoneOffset() * 60 * 1000)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>coucou</div>
        <div>heuuu 1. 2. ? </div>
        <div>
          {props.articles.map(article => {
            return (
              <div key={article.id}>
                id: {article.id} | on: {article.on}| test:
                {dateTimezone(article.on).toUTCString()} | text: {article.text}
              </div>
            )
          })}
        </div>
      </main>
      <div></div>

      <footer></footer>
    </div>
  )
}

export default Home
