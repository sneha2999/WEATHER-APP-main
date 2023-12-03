import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HourlyWeatherRow from "../../helper/HourlyWeatherRow";

const DailyTimeWeather = (props) => {
     const { weatherStandardUnitIcon, hourlyCityTempWeatherData } = useSelector((state) => state.weatherReducer);
     return (
          <div className="dailyWeatherForeCast">
               <div className="dailyWeatherForeCast-heading">
                    <h4>Today's Forecast</h4>
               </div>
               <div className="dailyWeatherForeCast-data">
                    {hourlyCityTempWeatherData.map((item) => (
                         <HourlyWeatherRow unit={weatherStandardUnitIcon} {...item} key={item.id} />
                    ))}
               </div>
          </div>
     );
};

export default DailyTimeWeather;
