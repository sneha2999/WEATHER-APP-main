import { useSelector } from "react-redux";
import "../../sass/weeklyweather.scss";
// import icons from "../../icons";
const WeeklyContent = () => {
     const { weatherStandardUnitIcon, weeklyCityWeatherData } = useSelector((state) => state.weatherReducer);
     return (
          <div className="weeklyWeatherDivision">
               <div className="weeklyWeatherDivision-heading">
                    <h4>7-DAY FORECAST</h4>
               </div>
               <div className="weeklyWeatherDivision-data">
                    {weeklyCityWeatherData &&
                         weeklyCityWeatherData.map((item) => (
                              <div className="weeklyWeatherDivision-row" id={item.id} key={item.id}>
                                   <div className="weeklyWeatherDivision-row_day">{item.day}</div>
                                   <div className="weeklyWeatherDivision-row_weather">{item.condition}</div>
                                   <div className="weeklyWeatherDivision-row_weather">
                                        <img src={`../icons/${item.icon}`} width="50px" />
                                   </div>
                                   <div className="weeklyWeatherDivision-row_temp">
                                        {item.tempMax}/{item.tempMin}
                                        {weatherStandardUnitIcon}
                                   </div>
                              </div>
                         ))}
               </div>
          </div>
     );
};

export default WeeklyContent;
