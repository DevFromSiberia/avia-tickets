import styles from './App.module.scss'
import logo from '../assets/logo.png'
import { Ticket } from '../components/Ticket'
import { Filters } from '../components/Filters'
import { Sorter } from '../components/Sorter'
import { NoTickets } from '../components/NoTickets'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchTickets } from '../store/reducers/ActionCreators'

function App() {
  const dispatch = useAppDispatch()
  const { filteredTickets, tickets } = useAppSelector(
    (state) => state.ticketReducer
  )
  useEffect(() => {
    dispatch(fetchTickets())
  }, [])
  const renderTickets = !filteredTickets.length ? tickets : filteredTickets
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
            <Sorter />
            <ul className={styles.tickets}>
              {renderTickets.map((ticket) => (
                <Ticket
                  key={ticket.id}
                  price={ticket.price}
                  from={ticket.from}
                  to={ticket.to}
                  company={ticket.company}
                  currency={ticket.currency}
                  date={ticket.date}
                  duration={ticket.duration}
                  time={ticket.time}
                  connectionAmount={ticket.connectionAmount}
                />
              ))}
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
