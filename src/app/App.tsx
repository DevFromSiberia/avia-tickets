import styles from './App.module.scss'
import logo from '../assets/logo.png'
import { SimpleCheckbox } from '../components/Checkbox/SimpleCheckbox'

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
                  <SimpleCheckbox span="Без пересадок" />
                </li>
                <li>
                  <SimpleCheckbox span="1 пересадка" />
                </li>
                <li>
                  <SimpleCheckbox span="2 пересадки" />
                </li>
                <li>
                  <SimpleCheckbox span="3 пересадки" />
                </li>
              </ul>
            </div>
            <div className={styles.companyFilter}>
              <div className={styles.title}>Компании</div>
              <ul className={styles.radios}>
                <li>Победа</li>
                <li>Red Wings</li>
                <li>S7 Airlines</li>
              </ul>
            </div>
          </div>
          <div className={styles.ticketsBlock}></div>
        </main>
      </div>
    </div>
  )
}

export default App
