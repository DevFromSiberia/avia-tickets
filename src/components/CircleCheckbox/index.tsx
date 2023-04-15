import styles from './index.module.scss'
import { useState } from 'react'

function CircleCheckbox({ text }: any) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      <span
        className={isChecked ? styles.active : styles.checkbox}
        aria-hidden="true"
      ></span>
      <span className={isChecked ? styles.activeText : styles.text}>
        {text}
      </span>
    </label>
  )
}

export { CircleCheckbox }
