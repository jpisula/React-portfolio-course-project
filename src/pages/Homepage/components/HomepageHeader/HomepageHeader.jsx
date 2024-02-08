import clsx from 'clsx';
import styles from './HomepageHeader.module.scss';
import avatar from 'assets/avatar.png';

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
    </header>
  );
};

export default HomepageHeader;
