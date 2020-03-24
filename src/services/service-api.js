export default class ServiceApi {

    urlCity = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5e25a2aa044e3b9adfed00a116b25a27';
    urlCoords = 'api.openweathermap.org/data/2.5/weather?lat=47.8492488&lon=35.131175999999996&appid=5e25a2aa044e3b9adfed00a116b25a27';
    weatherApiKey = '&appid=5e25a2aa044e3b9adfed00a116b25a27';
    mapquestApiKey = '1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v';
    mapquestApiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?' +
        'key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v&location=%D0%B7%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5';
    baseUrl = 'api.openweathermap.org/data/2.5/weather?';
    mapquestCityBase = 'https://www.mapquestapi.com/geocoding/v1/address?key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v&location=';
    initialCityBase = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v' +
        '&location=50.449988,30.523494&i';
    weatherApiCoordsCity = 'api.openweathermap.org/data/2.5/weather?lat=50.449988&lon=30.523494&appid=5e25a2aa044e3b9adfed00a116b25a27';
    weatherForcast = 'api.openweathermap.org/data/2.5/forecast?lat=50.449988&lon=30.523494&appid=5e25a2aa044e3b9adfed00a116b25a27';

    //Kyiv:
    // lati:  50.449988
    // longi:  30.523494

    getCityCoords = async (city) => {
        const res = await fetch(`${this.mapquestCityBase}${city}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${city}, received ${res.status}`);
        }
        const newRes = await res.json();
        return {
            cityName: newRes.results[0].locations[0].adminArea5,
            latitude: newRes.results[0].locations[0].latLng.lat,
            longitude: newRes.results[0].locations[0].latLng.lng
        };
        // return await res.json();
    };

    getCityFromCoords = async (coords) => {
        const { lat, lng } = coords;
        const res = await fetch(`${this.mapquestCityBase}${lat},${lng}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${coords}, received ${res.status}`);
        }
        const newRes = await res.json();
        return {
            cityName: newRes.results[0].locations[0].adminArea5,
            latitude: newRes.results[0].locations[0].latLng.lat,
            longitude: newRes.results[0].locations[0].latLng.lng
        };
    };

    getWeatherCityFromCoords = async (coords) => {
        const {latitude, longitude} = coords;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5e25a2aa044e3b9adfed00a116b25a27`);
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`);
        }
        return await res.json()
            .then(res => {
                return {
                    lon: res.coord.lon,
                    lat: res.coord.lat,
                    temp: res.main.temp,
                    tempMin: res.main.temp_min,
                    tempMax: res.main.temp_max,
                    wind: `${res.wind.speed} m/s`,
                    sky: res.clouds.all,
                    description: res.weather[0].description
                };
            });
    };

    getWeatherForcast = async (coords) => {
        const { latitude, longitude } = coords;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5e25a2aa044e3b9adfed00a116b25a27`);
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`);
        }
        return await res.json()
            .then((res) => {
                return res.list.map((weather) => {
                    return {
                        id: weather.dt,
                        temp: (weather.main.temp - 273).toFixed(1),
                        tempMin: (weather.main.temp_min - 273).toFixed(1),
                        tempMax: (weather.main.temp_max - 273).toFixed(1),
                        description: weather.weather[0].description,
                        clouds: weather.clouds.all,
                        wind: weather.wind.speed,
                        date: weather.dt_txt
                    };
                });
            });
    };

    getDayFromForcast = (day) => {
        const currentDay = new Date(day).getDay();
        switch (currentDay) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return true;
        }
    };
}

// coord:
//     lon: 35.13
// lat: 47.85

// weather: Array(1)
// 0:
// id: 802
// main: "Clouds"
// description: "scattered clouds"
// icon: "03d"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// base: "stations"
// main:
//     temp: 294.27
// feels_like: 288.79
// temp_min: 293.15
// temp_max: 295.15
// pressure: 1006
// humidity: 33
// __proto__: Object
// visibility: 10000
// wind:
//     speed: 6
// deg: 120
// __proto__: Object
// clouds:
//     all: 33
// __proto__: Object
// dt: 1583840693
// sys:
//     type: 1
// id: 8902
// country: "UA"
// sunrise: 1583812943
// sunset: 1583854633
// __proto__: Object
// timezone: 7200
// id: 687700
// name: "Zaporizhia"
// cod: 200