import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'

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
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
