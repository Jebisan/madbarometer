import React from 'react';
import Thermometer from "react-thermometer";


const DashboardPage = () => (
  <div>
    MadBarometeret
    <div>
		<Thermometer
				min={0}
				max={30}
				width={20}
				height={300}
				backgroundColor={'white'}
				fillColor={'red'}
				current={10}
		/>
	</div>	
  </div>
);

export default DashboardPage;
