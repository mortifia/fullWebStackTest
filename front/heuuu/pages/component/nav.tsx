import styles from '../styles/Home.module.css'
import React from 'react'
import { useContext } from 'react'
import { ContextScrollY } from '../_app'

export function Nav() {
  const scrollY = useContext(ContextScrollY)

  return (
    <div className={`master ${scrollY == 0 ? '' : 'scroll'}`}>
      <h1 className="master-title">Heuuu</h1>

      <a>Coucou</a>
      <a>Coucou</a>
      <a>Couyou</a>
      <a>Coucou</a>
    </div>
  )
}
