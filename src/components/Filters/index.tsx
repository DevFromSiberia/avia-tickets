import styles from './index.module.scss'
import { TransferFilter } from './TransferFilter'
import { CompanyFilter } from './CompanyFilter'
import { useState } from 'react'
function Filters() {
  const [dropActive, setDropActive] = useState(
    window.innerWidth > 1000 ? true : false
  )

  return (
    <div className={styles.filters}>
      <div
        onClick={() => {
          setDropActive(!dropActive)
        }}
        className={styles.filterDrop}
      >
        <span>Любая авиакомпания, любое кол-во пересадок</span>
        <span>Открыть настройки</span>
      </div>
      <div className={dropActive ? styles.filtersList : styles.filtersListHide}>
        <TransferFilter
          data={['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']}
        />
        <CompanyFilter data={['Победа', 'RedWings', 'S7Airlines']} />
      </div>
    </div>
  )
}

export { Filters }
