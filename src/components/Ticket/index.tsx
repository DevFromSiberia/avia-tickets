import styles from './index.module.scss'
import company_1 from '../../assets/company_1.png'
function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.price}>
        <span>12 680 Р</span>
        <img src={company_1} alt="company" />
      </div>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <div>SVO-LED</div>
          <div>12:00-16:30</div>
        </li>
        <li className={styles.infoItem}>
          <div>В пути</div>
          <div>4 ч 30 мин</div>
        </li>
        <li className={styles.infoItem}>
          <div>Пересадки</div>
          <div>Одна пересадка</div>
        </li>
      </ul>
    </li>
  )
}

export { Ticket }
