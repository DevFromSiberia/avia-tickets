import { CircleCheckbox } from './CircleCheckbox'
import styles from '../index.module.scss'

interface Props {
  data: string[]
}

function CompanyFilter({ data }: Props) {
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Компания</div>
      <ul className={styles.сheckboxes}>
        {data.map((item) => {
          return (
            <li key={item}>
              <CircleCheckbox text={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { CompanyFilter }
