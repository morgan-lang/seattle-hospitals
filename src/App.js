import React from 'react';
import axios from 'axios';
//import {BarChart} from 'react-easy-chart';

export default class HospitalList extends React.Component {
  state = {
    hospital500064: [],
	hospital500027: [],
	hospital500001: []
  }

  componentDidMount() {
    axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500064`)
      .then(res => {
        const hospital500064 = res.data;
        this.setState({ hospital500064 });
		console.log(hospital500064[0].higher_estimate);
		const thisthingy = hospital500064[0].higher_estimate;
		console.log(thisthingy);
      })
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500027`)
      .then(res => {
        const hospital500027 = res.data;
        this.setState({ hospital500027 });
		console.log(hospital500027);
      })
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500001`)
      .then(res => {
        const hospital500001 = res.data;
        this.setState({ hospital500001 });
		console.log(hospital500001);
      })	  
	  
	  
	  
	  
  }

  render() {
    return (
	<div id="container">
	<div id="harborview">
	<h3>Harborview Medical Center</h3>
        { this.state.hospital500064.map(harborviewList =>
		<ul>		
		<li>Category: {harborviewList.measure_name}</li>
		<li>Score: {harborviewList.score}</li>
		<li>Compared to national average: {harborviewList.compared_to_national}</li>
		<li>Denominator: {harborviewList.denominator}</li>
		<li>Percentage higher: {harborviewList.higher_estimate}</li>
		<li>Percentage lower: {harborviewList.lower_estimate}</li>
		</ul>		
		)}
		</div>
		
	<div id="swedish">
	<h3>Swedish Medical Center</h3>
        { this.state.hospital500027.map(swedishList =>
		<ul>		
		<li>Category: {swedishList.measure_name}</li>
		<li>Score: {swedishList.score}</li>
		<li>Compared to national average: {swedishList.compared_to_national}</li>
		<li>Denominator: {swedishList.denominator}</li>
		<li>Percentage higher: {swedishList.higher_estimate}</li>
		<li>Percentage lower: {swedishList.lower_estimate}</li>
		</ul>		
		)}
		</div>
		
	
	<div id="northwest">
	<h3>Northwest Hospital</h3>
        { this.state.hospital500001.map(NorthwestList =>
		<ul>		
		<li>Category: {NorthwestList.measure_name}</li>
		<li>Score: {NorthwestList.score}</li>
		<li>Compared to national average: {NorthwestList.compared_to_national}</li>
		<li>Denominator: {NorthwestList.denominator}</li>
		<li>Percentage higher: {NorthwestList.higher_estimate}</li>
		<li>Percentage lower: {NorthwestList.lower_estimate}</li>
		</ul>		
		)}
		</div>
		
		</div>
    )
  }
}
