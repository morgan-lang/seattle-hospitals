import React from 'react';
import axios from 'axios';
//import {BarChart} from 'react-easy-chart';

export default class HospitalList extends React.Component {
  state = {
  hospital500064: [],
	hospital500027: [],
	hospital500001: [],
	hospital500005: [],
	hospital500008: [],
	hospital500052: [],
	hospital500088: []
  }

  componentDidMount() {
	//HMC:
    axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500064`)
      .then(res => {
        const hospital500064 = res.data;
        this.setState({ hospital500064 });
		console.log(hospital500064[0].higher_estimate);
		const thisthingy = hospital500064[0].higher_estimate;
		console.log(thisthingy);
			})
	//Swedish:		
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500027`)
      .then(res => {
        const hospital500027 = res.data;
        this.setState({ hospital500027 });
		console.log(hospital500027);
			})
	//Northwest:		
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500001`)
      .then(res => {
        const hospital500001 = res.data;
        this.setState({ hospital500001 });
		console.log(hospital500001);
			})
  //Virginia Mason:
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500005`)
      .then(res => {
        const hospital500005 = res.data;
        this.setState({ hospital500005 });
		console.log(hospital500005);
			})
	//UWMC:	  
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500008`)
      .then(res => {
        const hospital500008 = res.data;
        this.setState({ hospital500008 });
		console.log(hospital500008);
			})
  //Group Health:
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500052`)
      .then(res => {
        const hospital500052 = res.data;
        this.setState({ hospital500052 });
		console.log(hospital500052);
      })	  
  //Valley Medical Center:
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500088`)
      .then(res => {
        const hospital500088 = res.data;
        this.setState({ hospital500088 });
		console.log(hospital500088);
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

	<div id="virginiamason">
	<h3>Virginia Mason</h3>
        { this.state.hospital500005.map(VirginiaList =>
		<ul>		
		<li>Category: {VirginiaList.measure_name}</li>
		<li>Score: {VirginiaList.score}</li>
		<li>Compared to national average: {VirginiaList.compared_to_national}</li>
		<li>Denominator: {VirginiaList.denominator}</li>
		<li>Percentage higher: {VirginiaList.higher_estimate}</li>
		<li>Percentage lower: {VirginiaList.lower_estimate}</li>
		</ul>		
		)}
		</div>

	<div id="uwmc">
	<h3>UW Medical Center</h3>
        { this.state.hospital500008.map(UWMCList =>
		<ul>		
		<li>Category: {UWMCList.measure_name}</li>
		<li>Score: {UWMCList.score}</li>
		<li>Compared to national average: {UWMCList.compared_to_national}</li>
		<li>Denominator: {UWMCList.denominator}</li>
		<li>Percentage higher: {UWMCList.higher_estimate}</li>
		<li>Percentage lower: {UWMCList.lower_estimate}</li>
		</ul>		
		)}
		</div>

	<div id="grouphealth">
	<h3>Group Health</h3>
        { this.state.hospital500052.map(GroupHealthList =>
		<ul>		
		<li>Category: {GroupHealthList.measure_name}</li>
		<li>Score: {GroupHealthList.score}</li>
		<li>Compared to national average: {GroupHealthList.compared_to_national}</li>
		<li>Denominator: {GroupHealthList.denominator}</li>
		<li>Percentage higher: {GroupHealthList.higher_estimate}</li>
		<li>Percentage lower: {GroupHealthList.lower_estimate}</li>
		</ul>		
		)}
		</div>

	<div id="valley">
	<h3>Valley Medical Center</h3>
        { this.state.hospital500088.map(ValleyList =>
		<ul>		
		<li>Category: {ValleyList.measure_name}</li>
		<li>Score: {ValleyList.score}</li>
		<li>Compared to national average: {ValleyList.compared_to_national}</li>
		<li>Denominator: {ValleyList.denominator}</li>
		<li>Percentage higher: {ValleyList.higher_estimate}</li>
		<li>Percentage lower: {ValleyList.lower_estimate}</li>
		</ul>		
		)}
		</div>		
		</div>
    )
  }
}
