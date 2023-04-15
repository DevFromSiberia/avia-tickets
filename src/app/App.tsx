import styles from './App.module.scss'
import logo from '../assets/logo.png'
import { Ticket } from '../components/Ticket'
import { SimpleCheckbox } from '../components/SimpleCheckbox'
import { CircleCheckbox } from '../components/CircleCheckbox'

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
          <div className={styles.filters}>
            <div className={styles.transferFilter}>
              <div className={styles.title}>Количество пересадок</div>
              <ul className={styles.checkboxes}>
                <li>
                  <SimpleCheckbox text="Без пересадок" />
                </li>
                <li>
                  <SimpleCheckbox text="1 пересадка" />
                </li>
                <li>
                  <SimpleCheckbox text="2 пересадки" />
                </li>
                <li>
                  <SimpleCheckbox text="3 пересадки" />
                </li>
              </ul>
            </div>
            <div className={styles.companyFilter}>
              <div className={styles.title}>Компании</div>
              <ul className={styles.radios}>
                <li>
                  <CircleCheckbox text="Победа" />
                </li>
                <li>
                  <CircleCheckbox text="Red Wings" />
                </li>
                <li>
                  <CircleCheckbox text="S7 Airlines" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.ticketsBlock}>
            <ul className={styles.switcherList}>
              <li className={styles.switcherItem__active}>Самый дешевый</li>
              <li className={styles.switcherItem}>Самый быстрый</li>
              <li className={styles.switcherItem}>Самый оптимальный</li>
            </ul>
            <ul className={styles.tickets}>
              <Ticket />
              {/* <div className={styles.noTickets}>Билетов не найдено</div> */}
            </ul>
            <button className={styles.lazyBtn}>Загрузить еще билеты</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
