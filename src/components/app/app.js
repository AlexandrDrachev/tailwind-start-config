import React, { Component } from "react";

import { Redirect, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from "../header";
import { withService } from "../hoc";
import Autorisation from "../autorisation";
import WeatherToday from "../weathers/weather-today";
import WeatherWeek from "../weathers/weather-week";
import ServiceApi from "../../services/service-api";
import { getWeatherDetails } from "../weathers/weather-actions";

class App extends Component{

    componentDidMount() {
        this.props.getWeatherDetails();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.weatherDetails !== prevProps.weatherDetails) {
            this.viewBckgImage();
        }
    }

    api = new ServiceApi();

    urlImgObj = {
        winterDay: 'https://narodna-pravda.ua/wp-content/uploads/2018/12/p87007-1024x689.jpg',
        winterNight: 'https://lh4.googleusercontent.com/proxy/0EaIxiOGNJwxRe7WFJzpVqLrEHmeu09vPH_Lu_5Y-bSR087cmrjNW8ItlN1sMa15NC3ZFCvOROoDSt9cUpa6hqJvefs0EXu_Dn9O9yhoY1Suhz0oAB0LO76wbVE',
        winterSnow: 'https://www.cheltv.ru/wp-content/uploads/2019/12/cneg.jpg',
        springDay: 'https://audio-class.ru/deutsch/images/fruehling.jpg',
        springNight: 'https://www.chitalnya.ru/upload3/247/9e6d78005b7790a7b821014da55d69d1.jpg',
        springRain: 'https://novostipmr.com/sites/default/files/field/image/201904/dozhd-mokrye-cvety-foto-750x422.jpg',
        summerDay: 'https://i.obozrevatel.com/2019/7/19/pogo.jpg',
        summerNight: 'https://lh6.googleusercontent.com/proxy/bMi6LD2sHVkiZ6P5Tm4gCzCWkEa_WJpf4ly7i7_voGusXPvMFUPjZoXlpDJKrBKOonl7fYSigY4HI2GNIegQIpMYjw',
        summerRain: 'https://i.pinimg.com/originals/f7/ef/9e/f7ef9ecd179a5f992d00491f4863baa3.jpg',
        autumnDay: 'https://telegraf.com.ua/files/2017/10/20_1.jpg',
        autumnNight: 'https://primamedia.gcdn.co/f/266x136/1343/1342072.jpg?2baab86e694e8ff4678fa4df98ef62ed',
        autumnRain: 'https://cs11.livemaster.ru/storage/topicavatar/600x450/9e/77/65361dbb8abb09528e2676b808e28143c67a75.jpg?h=dftBW7Nl5dETQ1VADz6CmQ'
    };

    viewBckgImage = () => {
        const { weatherDetails: { day, night, rain, snow, winter, spring, summer, autumn }} = this.props;
        if (winter && day && !snow) { return this.urlImgObj.winterDay }
        if (winter && night) { return this.urlImgObj.winterNight }
        if (winter && day && snow) { return this.urlImgObj.winterSnow }
        if (spring && day && !rain) { return this.urlImgObj.springDay }
        if (spring && night) { return this.urlImgObj.springNight }
        if (spring && day && rain) { return this.urlImgObj.springRain }
        if (summer && day && !rain) { return this.urlImgObj.summerDay }
        if (summer && night) { return this.urlImgObj.summerNight }
        if (summer && day && rain) { return this.urlImgObj.summerRain }
        if (autumn && day && !rain) { return this.urlImgObj.autumnDay }
        if (autumn && night) { return this.urlImgObj.autumnNight }
        if (autumn && day && rain) { return this.urlImgObj.autumnRain }
        return true;
    };

    render() {

        // console.log(this.api.getDayFromForcast("2020-03-16"));
        // console.log(this.api.getDayFromForcast(new Date()));
        // console.log(new Date().toLocaleDateString());
        // console.log(this.props.weatherDetails);
        // console.log('******************8',this.viewBckgImage());
        const styles = {
            backgroundImage: `url(${this.viewBckgImage()})`
        };

        return (
            <div
                className="flex flex-col items-center h-screen mb:min-h-screen w-screen bg-cover bg-center overflow-auto"
                style={styles}
                >
                <Header />
                <Switch>
                    {!this.props.autorisation ? <Autorisation /> : <Route path="/" exact component={WeatherToday} />}
                    <Redirect to="/" from="/home"/>
                </Switch>
                {/*<WeatherWeek />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weatherDetails: state.locationsState.weatherDetails,
        autorisation: state.autorisationState.autorisation
    };
};

const mapDispatchToProps = {
    getWeatherDetails: getWeatherDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(withService()(App));
