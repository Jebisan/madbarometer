import React from 'react';
import Thermometer from "react-thermometer";


export class DashboardPage extends React.Component {

  constructor() {
    super();
    this.state = {
      quality:0,
      time:0,
      hygiene:0,
      totalPoint: 0
    };
  }

  setTotalPoint = (e) => {
    const totalPoint = Number(this.state.quality)+Number(this.state.time)+Number(this.state.hygiene);
    this.setState(() => ({ totalPoint}));
  }

  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState(() => ({
        time
          }));
        };
  
  onHygieneChange = (e) => {
    const hygiene = e.target.value;
    this.setState(() => ({
        hygiene
                }));
              };

onQualityChange = (e) => {
  const quality = e.target.value;
                this.setState(() => ({
                  quality
                            }));
                          };

  render () {
    return (
      <div>
      <h1>MadBarometeret</h1>
      <input  onChange={this.onTimeChange} type="number" placeholder='Time'     /> 
      <input  onChange={this.onHygieneChange} type="number" placeholder='Hygiene'/>
      <input  onChange={this.onQualityChange} type="number" placeholder='Quality'/>
      <button onClick={this.setTotalPoint}>Calculate!</button>
      <div className="center">
      
      <Thermometer 
          min={0}
          max={100}
          width={40}
          height={600}
          backgroundColor={'#BDC0BA'}
          fillColor={'#D0104C'}
          current={this.state.totalPoint}
      />
    </div>	
    </div>
    )
  }
 

}
export default DashboardPage;
