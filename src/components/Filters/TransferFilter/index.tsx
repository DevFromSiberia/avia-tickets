import styles from '../index.module.scss'
import { SimpleCheckbox } from './SimpleCheckbox'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

function TransferFilter() {
  const { transferFilterTypes, currentFilters } = useAppSelector(
    (state) => state.ticketReducer
  )
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <ul className={styles.сheckboxes}>
        {transferFilterTypes.map((item) => {
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
