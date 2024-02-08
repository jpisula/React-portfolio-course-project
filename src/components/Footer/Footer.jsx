import clsx from 'clsx';
import styles from './Footer.module.scss';
import { IoMailOpenOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={clsx('container', styles.footerWrapper)}>
        <h2>Contact</h2>
        <div className={styles.footerInfo}>
          <p>
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </p>
          <a href='mailto:test@gmailll.com'>
            <IoMailOpenOutline /> test@gmailll.com
          </a>
          <a href='tel:+48000000000'>
            <CiPhone /> +48 000 000 000
          </a>
        </div>
        <div className={styles.footerIcons}>
          <FaGithubSquare />
          <FaLinkedin />
          <FaFacebookSquare />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
