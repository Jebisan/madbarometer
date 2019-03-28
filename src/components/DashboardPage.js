import React from 'react';
import Thermometer from "react-thermometer";


const DashboardPage = () => (
  <div>
    MadBarometeret
    <div className="center">
		<Thermometer 
				min={0}
				max={100}
				width={40}
				height={600}
				backgroundColor={'#BDC0BA'}
				fillColor={'#D0104C'}
				current={10}
		/>
	</div>	
  </div>
);

export default DashboardPage;
