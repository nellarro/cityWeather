import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines'


class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const id = cityData.city.id
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={id}>
        <td>{cityName}</td>
        <td>
          <Sparklines
            height={120}
            width={100}
            data={temps} >
              <SparklinesLine color="salmon" />
            </Sparklines>
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
