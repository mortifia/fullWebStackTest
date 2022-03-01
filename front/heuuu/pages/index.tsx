import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
//import { article } from '../../../back/api/src/schema/article'

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
  const debounce = fn => {
    let frame
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame)
      }
      frame = requestAnimationFrame(() => {
        fn(...params)
      })
    }
  }
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY
  }
  document.addEventListener('scroll', debounce(storeScroll), {
    passive: true,
  })
  storeScroll()
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
        <article>
          <img src="O5220635-1024x683.jpg" className="article-img-start" />
          <h1>Heuuu Bonjour</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas <a>voluptatem</a> vel ipsum
            facere ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat.
          </p>
          <h2>
            Oublie que tu a aucune aucune chance. Dans le doute on ne sait
            jamais
          </h2>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat. Sit tenetur ipsa eos minima eius qui consectetur
            voluptatem est eius cupiditate et nihil rerum id perspiciatis velit
            est consequatur quibusdam? Et quam molestiae ea dolore placeat aut
            laborum soluta ut pariatur doloremque. Et minus amet ea nesciunt
            deleniti eum praesentium nemo ea ipsum nemo qui deserunt? At
            architecto nihil non suscipit nemo non nihil minus ut consequatur
            similique et praesentium dignissimos non consectetur provident est
            modi quia?
          </p>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat. Sit tenetur ipsa eos minima eius qui consectetur
            voluptatem est eius cupiditate et nihil rerum id perspiciatis velit
            est consequatur quibusdam? Et quam molestiae ea dolore placeat aut
            laborum soluta ut pariatur doloremque. Et minus amet ea nesciunt
            deleniti eum praesentium nemo ea ipsum nemo qui deserunt? At
            architecto nihil non suscipit nemo non nihil minus ut consequatur
            similique et praesentium dignissimos non consectetur provident est
            modi quia?
          </p>
          <h2>vous voulez vos valises vernies ?</h2>
          <p className="h1-subtitle">
            il etait une fois une coquiette dans l'emicicle du pouvoir
          </p>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat. Sit tenetur ipsa eos minima eius qui consectetur
            voluptatem est eius cupiditate et nihil rerum id perspiciatis velit
            est consequatur quibusdam? Et quam molestiae ea dolore placeat aut
            laborum soluta ut pariatur doloremque. Et minus amet ea nesciunt
            deleniti eum praesentium nemo ea ipsum nemo qui deserunt? At
            architecto nihil non suscipit nemo non nihil minus ut consequatur
            similique et praesentium dignissimos non consectetur provident est
            modi quia?
          </p>
        </article>
        <article>
          <img src="Tokyo-Saryo.jpg" className="article-img-start" />
          <h1>Heuuu Bonjour</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat.
          </p>
          <h2>
            Oublie que tu a aucune chance. Dans le doute on ne sait jamais
          </h2>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat. Sit tenetur ipsa eos minima eius qui consectetur
            voluptatem est eius cupiditate et nihil rerum id perspiciatis velit
            est consequatur quibusdam? Et quam molestiae ea dolore placeat aut
            laborum soluta ut pariatur doloremque. Et minus amet ea nesciunt
            deleniti eum praesentium nemo ea ipsum nemo qui deserunt? At
            architecto nihil non suscipit nemo non nihil minus ut consequatur
            similique et praesentium dignissimos non consectetur provident est
            modi quia?
          </p>
          <p>
            Lorem ipsum dolor sit amet. Qui voluptas voluptatem vel ipsum facere
            ut dolorem quidem aut error libero eum galisum aspernatur qui
            tenetur atque et consectetur galisum. Et corrupti asperiores sed
            cupiditate incidunt eum magnam quia et voluptatem modi qui dolorum
            repellat. Sit tenetur ipsa eos minima eius qui consectetur
            voluptatem est eius cupiditate et nihil rerum id perspiciatis velit
            est consequatur quibusdam? Et quam molestiae ea dolore placeat aut
            laborum soluta ut pariatur doloremque. Et minus amet ea nesciunt
            deleniti eum praesentium nemo ea ipsum nemo qui deserunt? At
            architecto nihil non suscipit nemo non nihil minus ut consequatur
            similique et praesentium dignissimos non consectetur provident est
            modi quia?
          </p>

          <p>il etait une fois une coquiette</p>
        </article>
      </main>
    </div>
  )
}

export default Home
