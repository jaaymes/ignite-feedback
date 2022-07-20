import style from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="" />
      <p>Ignite Feed</p>
    </header>
  )
}