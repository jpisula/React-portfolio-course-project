import clsx from 'clsx';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';
import { navOptions } from '../../data/navOptions';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={clsx('container', styles.navbar)}>
        <img src={logo} alt='Our company logo, portfolio logo' />

        <ul className={styles.navlinks}>
          {navOptions.map((option) => (
            <li key={nanoid()}>
              {option.isScroll && <a href={option.path}>{option.name}</a>}
              {!option.isScroll && <Link to={option.path}>{option.name}</Link>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
