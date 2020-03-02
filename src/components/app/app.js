import React from "react";

import Header from "../header";
import { withService } from "../hoc";
import Autorisation from "../autorisation";
import WeatherToday from "../weathers/weather-today";
import WeatherWeek from "../weathers/weather-week";

const App = ({ serviceApi }) => {

    let bckg = "bg-indigo-700";
    let day = true;
    let night = false;
    let snow = false;
    let rain = true;
    let summer = false;
    let autumn = true;
    let winter = false;
    let spring = false;
    let urlImgObj = {
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

    const viewBckgImage = () => {
        if (winter && day && !snow) { return urlImgObj.winterDay }
        if (winter && night) { return urlImgObj.winterNight }
        if (winter && day && snow) { return urlImgObj.winterSnow }
        if (spring && day && !rain) { return urlImgObj.springDay }
        if (spring && night) { return urlImgObj.springNight }
        if (spring && day && rain) { return urlImgObj.springRain }
        if (summer && day && !rain) { return urlImgObj.summerDay }
        if (summer && night) { return urlImgObj.summerNight }
        if (summer && day && rain) { return urlImgObj.summerRain }
        if (autumn && day && !rain) { return urlImgObj.autumnDay }
        if (autumn && night) { return urlImgObj.autumnNight }
        if (autumn && day && rain) { return urlImgObj.autumnRain }
        return true;
    };
    viewBckgImage();

    let styles = {
        "backgroundImage": `url(${viewBckgImage()})`
    };

    console.log(viewBckgImage());

    return (
        <div
            className="flex flex-col items-center h-screen mb:h-full bg-cover bg-center"
            style={styles}>
            <Header />
            <Autorisation />
            <WeatherToday />
            <WeatherWeek />
        </div>
    );
};

export default withService()(App);
