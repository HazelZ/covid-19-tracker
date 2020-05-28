import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
import Icon from './images/image.png'

const App = () => {
  const [data,setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };
    getData();
  },[]);
  return (
    <div className={styles.container}>
      <div className={styles['img-container']}>
        <img src={Icon} alt="Covid-19 icon" className={styles.img}/>
      </div>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
