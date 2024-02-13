import styles from './Homepage.module.scss';
import HomepageHeader from './components/HomepageHeader/HomepageHeader';
import WeatherSection from './components/WeatherSection/WeatherSection';

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <HomepageHeader />
      <WeatherSection city={'Katowice'} isEnabled />
    </main>
  );
};

export default Homepage;
