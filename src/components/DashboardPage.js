import React from 'react';
import Thermometer from "react-thermometer";


export class DashboardPage extends React.Component {

  constructor() {
    super();
    this.state = {
      restaurantName:'',
      quality:0,
      time:0,
      hygiene:0,
      totalPoint: 0,
      temperatureColor: '',
      calculated: false
    };
  }

  calculateTotalPoints = (e) => {
    const totalPoint = Number(this.state.quality)+Number(this.state.time)+Number(this.state.hygiene);
    this.setState(() => ({ totalPoint}));
    this.setState(() => ({ calculated:true}));
  }

  onRestaurantChangeName = (e) => {
    const restaurantName = e.target.value;
    this.setState(() => ({
      restaurantName
          }));
        };

  onTimeChange = (e) => {
    const time = e.target.value/3;
    this.setState(() => ({
        time
          }));
        };
  
  onHygieneChange = (e) => {
    const hygiene = e.target.value/3;
    this.setState(() => ({
        hygiene
                }));
              };

onQualityChange = (e) => {
  const quality = e.target.value/3;
                this.setState(() => ({
                  quality
                            }));
                          };
/*
setTemperaturColor = () => {
  if( this.state.totalPoint>70){
    this.setState(() => ({temperatureColor:'green'}));}
    else if( this.state.totalPoint >=30 && this.state.totalPoint<=70)
    this.setState(() => ({temperatureColor:'orange'}));
    else if (this.state.totalPoint<30){
      this.setState(() => ({temperatureColor:'red'}));
    }
    console.log(this.state.totalPoint, this.state.temperatureColor)
  }
*/
getState = () => {
  console.log(this.state);
}

  render () {
    return (
      <div>
      <h1>MadBarometeret</h1>
      <input  onChange={this.onRestaurantChangeName} type="text" placeholder='Restaurant Name'/>
      <br></br> 
      <input  onChange={this.onTimeChange} type="number" placeholder='Time'/>%
      <br></br> 
      <input  onChange={this.onHygieneChange} type="number" placeholder='Hygiene'/>%
      <br></br> 
      <input  onChange={this.onQualityChange} type="number" placeholder='Quality'/>%
      <br></br> 
      <button onClick={this.calculateTotalPoints}>Calculate!</button>
      <h2 className="textcenter">Total {this.state.calculated?this.state.totalPoint+ " points!":null} </h2>
      
      <div className="center">
      <Thermometer 
          min={0}
          max={100}
          width={20}
          height={400}
          backgroundColor={'#BDC0BA'}
          fillColor={this.state.totalPoint<=50?'red':'green'}
          current={this.state.totalPoint}
      />
    </div>	
    </div>
    )
  }
 

}
export default DashboardPage;
