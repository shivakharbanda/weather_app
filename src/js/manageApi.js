let apiKey = "d0b122562de24410bbc95911232708"

export async function getWeatherData(cityName) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=8`)
    let data = await res.json();

    return data
}


export async function processData(city) {
    try {
        const data = await getWeatherData(city)
        return data;
    } catch (error){
        console.error("Error while fetching data:", error);
    }
}

export async function getForcast(city) {
    try {
        let data = await processData(city);
        return data.forecast.forecastday[0]
    } catch (error) {
        console.error(error);
    }
}

export async function getForcast14Days(city) {
    try {
        let data = await processData(city);
        return data.forecast.forecastday
    } catch (error) {
        console.error(error);
    }
}

export async function getCurrent(city) {
    try {
        let data = await processData(city);
        return data.current;
    } catch (error) {
        console.error(error);
    }
}

export async function getLocation(city) {
    try {
        let data = await processData(city);
        return data.location;
    } catch (error) {
        console.error(error);
    }
}


export async function displayData(dataPromise) {
    try {
        let data = await dataPromise;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}