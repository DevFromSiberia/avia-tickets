import styles from './App.module.scss'
import logo from '../assets/logo.png'
import { Ticket } from '../components/Ticket'
import { Filters } from '../components/Filters'
import { Sorter } from '../components/Sorter'
import { NoTickets } from '../components/NoTickets'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.logo} href="#">
            <img src={logo} alt="logo" />
            <span>Поиск авиабилетов</span>
          </a>
        </header>
        <main className={styles.main}>
          <div className={styles.ticketsBlock}>
            <Filters />
            <Sorter
              data={['Самый дешевый', 'Самый быстрый', 'Самый оптимальный']}
            />
            <ul className={styles.tickets}>
              <Ticket />

              {/* <NoTickets /> */}
            </ul>
            <button className={styles.lazyBtn}>Загрузить еще билеты</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
