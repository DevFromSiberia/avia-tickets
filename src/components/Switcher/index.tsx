import styles from './index.module.scss'
import { useState, MouseEvent } from 'react'

interface Props {
  data: string[]
}

function Switcher({ data }: Props) {
  const [active, setActive] = useState(0)
  const handler = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    if (e.target instanceof HTMLLIElement) {
      const id = e.target.dataset.id ? +e.target.dataset.id : 0
      setActive(id)
    }
  }

  return (
    <ul className={styles.switcher}>
      {data.map((item, index) => (
        <li
          data-id={index}
          key={index}
          onClick={(e) => handler(e)}
          className={active === index ? styles.item__active : styles.item}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export { Switcher }
