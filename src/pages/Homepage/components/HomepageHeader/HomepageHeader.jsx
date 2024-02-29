import clsx from 'clsx';
import styles from './HomepageHeader.module.scss';
import avatar from 'assets/avatar.png';
import Button from 'components/Button/Button';
import CV from 'assets/cv.pdf';

const HomepageHeader = () => {
  return (
    <header className={clsx('container', styles.hompageHeader)}>
      <img
        className={styles.avatar}
        src={avatar}
        alt='Junior Frontend Developer - XXX XXX - HTML, CSS, React, JavaScript'
      />
      <h1>
        I do code and make content <mark>about it!</mark>
      </h1>
      <p>
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </p>
      <div className={styles.buttons}>
        <a href='#contact'>
          <Button ctoText={'Get In Touch'} />
        </a>
        <a href={CV} target='_blank' rel='noreferrer'>
          <Button mode={'secondary'} ctoText={'Download CV'} />
        </a>
      </div>
    </header>
  );
};

export default HomepageHeader;
