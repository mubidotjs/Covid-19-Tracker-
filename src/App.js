import React, { Component } from 'react'
import coranaImg from './images/image.png'
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export default class App extends Component {
  state = {
    data: { },
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country})
  }
  
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coranaImg} alt="covid-19" className={styles.image} />
        <Cards data={data}  />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>  
    )
  }
}