import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Morpion.module.css'
import React from 'react'
import { Nav } from './component/nav'

function Home(this: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Morpion du Morty</title>
        <meta name="description" content="Morpion du Morty revisité" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <article>
          <div id="win"></div>
          <div id="grid">
            <div className="row" id="0">
              <div className="col" id="0">
                x
              </div>
              <div className="col" id="1">
                x
              </div>
              <div className="col" id="2">
                x
              </div>
            </div>
            <div className="row" id="1">
              <div className="col" id="0">
                x
              </div>
              <div className="col" id="1">
                x
              </div>
              <div className="col" id="2">
                x
              </div>
            </div>
            <div className="row" id="2">
              <div className="col" id="0">
                x
              </div>
              <div className="col" id="1">
                x
              </div>
              <div className="col" id="2">
                x
              </div>
            </div>
          </div>
          <button id="reset" style={{ display: 'none' }}>
            nouvelle partie
          </button>
        </article>
      </main>
    </div>
  )
}

export default Home
