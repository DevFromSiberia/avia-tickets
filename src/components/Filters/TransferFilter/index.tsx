import styles from '../index.module.scss'
import { SimpleCheckbox } from './SimpleCheckbox'

interface Props {
  data: string[]
}

function TransferFilter({ data }: Props) {
  /* данные, тип чекбоксов, заголовок,*/
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <ul className={styles.сheckboxes}>
        {data.map((item) => {
          return (
            <li key={item}>
              <SimpleCheckbox text={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { TransferFilter }
