import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
// import {Sparklines, SparklinesLine} from 'react-sparklines'


class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const id = cityData.city.id
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={id}>
        <td>{cityName}</td>
        <td>
          <Chart color='orange' data={temps}/>
        </td>
      </tr>
    )
  }
  render() {
    return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
  )}
}

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
