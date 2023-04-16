import styles from './App.module.scss'
import logo from '../assets/logo.png'
import { Ticket } from '../components/Ticket'
import { Filter } from '../components/Filter'
import { Switcher } from '../components/Switcher'
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
          <div className={styles.filtres}>
            <Filter
              data={[
                'Без пересадок',
                '1 пересадка',
                '2 пересадки',
                '3 пересадки',
              ]}
              checkboxType="simple"
              title="Количество пересадок"
            />
            <Filter
              data={['Победа', 'RedWings', 'S7Airlines']}
              checkboxType="circle"
              title="Компания"
            />
          </div>

          <div className={styles.ticketsBlock}>
            <Switcher
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
