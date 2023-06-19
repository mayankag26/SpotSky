const baseURL = "https://api.weatherapi.com/v1/current.json?key=2033ea50dada471ab41130224231906";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async(latitude,longitude) => {
    const response = await fetch(`${baseURL}&q=${latitude},${longitude}&aqi=yes`);
    return await response.json();
}
