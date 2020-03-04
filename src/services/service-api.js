export default class ServiceApi {

    urlCity = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5e25a2aa044e3b9adfed00a116b25a27';
    urlCoords = 'api.openweathermap.org/data/2.5/weather?lat=47.8492488&lon=35.131175999999996&appid=5e25a2aa044e3b9adfed00a116b25a27';
    weatherApiKey = '&appid=5e25a2aa044e3b9adfed00a116b25a27';
    mapquestApiKey = '1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v';
    mapquestApiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?' +
        'key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v&location=%D0%B7%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5';
    baseUrl = 'api.openweathermap.org/data/2.5/weather?';
    mapquestCityBase = 'http://www.mapquestapi.com/geocoding/v1/address?key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v&location=';
    initialCityBase = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=1Hgr6IGI5a9QoajX6VmGHK8AeZaNyE1v' +
        '&location=50.449988,30.523494&i';

    //Kyiv:
    // lati:  50.449988
    // longi:  30.523494

    getCityCoords = async (city) => {
        const res = await fetch(`${this.mapquestCityBase}${city}`);
        console.log(`${this.mapquestCityBase}${city}`);
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
}

