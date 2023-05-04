import styles from './Navbar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container className={'flex'}>
        <a href="/" className={styles.navicon}>
          <i className={'fa fa-tasks'}></i>
        </a>
        <ul className={styles.navlinks}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;