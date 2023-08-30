import { getBody } from "./domComponents/body";
import { displayData, getCurrent, getForcast, getForcast14Days, getLocation, processData } from "./manageApi";
import '../style/style.css';
import { getHeader } from "./domComponents/header";

async function main() {



    let mainContent = document.querySelector(".content")
    console.log(mainContent)

    let bodyElement = getBody()
    let headerElement = getHeader()

    mainContent.appendChild(headerElement)
    mainContent.appendChild(bodyElement)



    
    let location = "london"
    let locationData = await getLocation(location);
    
    let getLocationDetails = (data) => {
        return {
            "name": data.name,
            "country": data.country 
        }
    }

    let tempdata = await getCurrent(location);

    let  forcastData = await getForcast(location)

    let day14Data  = await getForcast14Days(location)


    let get14DayData = (day14Data) => {
        let fourteenDayData = {};
        for (let element of day14Data) {
            
    
            let newDate = new Date();
    
            if (newDate.toISOString().split("T")[0] === element.date) {
                fourteenDayData.today = {
                    "avgtemp_c" : element.day.avgtemp_c,
                    "avgtemp_f" : element.day.avgtemp_f,
                    "daily_chance_of_rain" : element.day.daily_chance_of_rain,
                    "icon" : element.day.condition.icon,
                    "forcast" : element.day.condition.text
                }
            } else {
                let dateObj = new Date(element.date);
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let dateStr = element.date;

                const dayName = daysOfWeek[dateObj.getDay()];

                fourteenDayData[dateStr] = {
                    "day_name": dayName,
                    "avgtemp_c" : element.day.avgtemp_c,
                    "avgtemp_f" : element.day.avgtemp_f,
                    "daily_chance_of_rain" : element.day.daily_chance_of_rain,
                    "icon" : element.day.condition.icon,
                    "forcast" : element.day.condition.text
                }
            }
            
        }
        return fourteenDayData;
    }
    

    let getLocationTemp = (tempData, forcastData) => {
        return { 
            "temp_c": tempData.temp_c,
            "temp_f": tempData.temp_f,
            "condition_current": tempData.condition,
            "day_high": {
                "high_c": forcastData.day.maxtemp_c,
                "high_f": forcastData.day.maxtemp_f,
            }, 
            "day_low": {
                "low_c": forcastData.day.mintemp_c,
                "low_f": forcastData.day.mintemp_f,
            }, 
            "condition_prediction": forcastData.day.condition,
            "hourly_data": forcastData.hour,
            "sunrise": forcastData.astro.sunrise,
            "sunset": forcastData.astro.sunset,
            "chance_of_rain": forcastData.day.daily_chance_of_rain,
            "avg_humidity": forcastData.day.avghumidity,
            "wind_speed_kph": tempData.wind_kph,
            "wind_speed_mph": tempData.wind_mph,
            "wind_dir": tempData.wind_dir,
            "feelslike_c" : tempData.feelslike_c,
            "feelslike_f" : tempData.feelslike_f,
            "precip": tempData.precip_mm,
            "pressure_mb" : tempData.pressure_mb,
            "visibility" : tempData.vis_km,
            "uv": tempData.uv,
        }
    }


    let locationDetails = getLocationDetails(locationData);
    let tempDeets = getLocationTemp(tempdata, forcastData);
    let fourteenDayData = get14DayData(day14Data);

    console.log(locationDetails); 
    console.log(tempDeets);
    console.log(fourteenDayData); 


    
}

main();