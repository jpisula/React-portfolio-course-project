import clsx from 'clsx';
import React from 'react';
import styles from './WeatherSection.module.scss';

const fetchWeatherData = async (city) => {
  return fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
  ).then((response) => response.json());
};

class WeatherSection extends React.Component {
  constructor(props) {
    super();
    this.state = { chosenCity: props.city, weatherResponse: null };
  }

  componentDidMount() {
    const { chosenCity } = this.state;

    fetchWeatherData(chosenCity)
      .then((jsonResponse) => {
        this.setState((prevState) => ({
          ...prevState,
          weatherResponse: jsonResponse,
        }));
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    const { chosenCity, weatherResponse } = this.state;

    if (!weatherResponse) {
      return null;
    }

    const {
      location: { country },
      current: {
        temp_c,
        feelslike_c,
        condition: { text, icon },
      },
    } = weatherResponse;

    // const temp_c = weatherResponse.current.temp_c;
    // const feelslike_c = weatherResponse.current.feelslike_c;
    // const text = weatherResponse.current.condition.text;
    // const icon = weatherResponse.current.condition.icon;
    // const country = weatherResponse.location.country;

    return (
      <section className='section'>
        <div className={clsx('container', styles.weatherSection)}>
          <h2>CURRENT WEATHER IN {chosenCity.toUpperCase()}</h2>
          <div className={styles.temperatureInfo}>
            <div className={styles.temperatureLeftSide}>
              <p>{text}</p>
              <img src={icon} alt='' />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.temperatureRightSide}>
              <p>
                {chosenCity}, {country}
              </p>
              <p className={styles.temp}>{temp_c} &deg;C</p>
              <p className={styles.tempFeels}>
                Feels like: {feelslike_c} &deg;C
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WeatherSection;
