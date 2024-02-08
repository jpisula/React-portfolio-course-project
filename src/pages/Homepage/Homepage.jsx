import styles from './Homepage.module.scss';
import HomepageHeader from './components/HomepageHeader/HomepageHeader';

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <HomepageHeader />
    </main>
  );
};

export default Homepage;
