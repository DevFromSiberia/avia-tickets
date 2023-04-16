import styles from './index.module.scss'

import { SimpleCheckbox } from '../SimpleCheckbox'
import { CircleCheckbox } from '../CircleCheckbox'
import { ReactComponentElement } from 'react'

interface Props {
  data: string[]
  checkboxType: 'simple' | 'circle'
  title: string
}

function Filter({ data, checkboxType, title }: Props) {
  /* данные, тип чекбоксов, заголовок,*/
  return (
    <div className={styles.filter}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.сheckboxes}>
        {data.map((item) => {
          if (checkboxType === 'simple') {
            return (
              <li key={item}>
                <SimpleCheckbox text={item} />
              </li>
            )
          } else if (checkboxType === 'circle') {
            return (
              <li key={item}>
                <CircleCheckbox text={item} />
              </li>
            )
          } else {
            return
          }
        })}
      </ul>
    </div>
  )
}

export { Filter }
