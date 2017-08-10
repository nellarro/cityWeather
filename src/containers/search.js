import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeatherFunc} from '../actions/index';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.getWeatherFunc(this.state.term);
  }

  render() {
    return (
      <form className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onInputChange} value={this.state.term}
          placeholder="Get a five day forecast in your favorite cities."/>
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getWeatherFunc}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
