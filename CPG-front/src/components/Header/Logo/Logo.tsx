/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'


export function Logo() {
  return(
    <img className={styles.logo} src="/Assets/Logo.svg" alt="logo"/>
  )
}