import React from "react";
import {numberFormat} from "./index";
import jMoment, {min} from "moment-jalaali";

const customizeDateAndTime = (time, options) => {
    // We need to use a try-catch here to support IE11!

    try {
        return options
            ? new Intl.DateTimeFormat("fa-FA", options).format(time)
            : new Intl.DateTimeFormat("fa-FA").format(time);
    } catch (err) {
        console.log('timee',time)
        return options
            ? new Intl.DateTimeFormat("en-GB", options).format(time)
            : new Intl.DateTimeFormat("en-GB").format(time);
    }
};

const dateTimeCustom = (date) => {
    const day = customizeDateAndTime(date * 1000, {
        day: "numeric",
    });

    const month = customizeDateAndTime(date * 1000, {
        month: "short",
    });

    const monthNumber = parseInt(numberFormat.toEnglishDigitsOnlyNum(customizeDateAndTime(date * 1000, {
        month: "numeric",
    })));

    const year = customizeDateAndTime(date * 1000, {
        year: "numeric",
    });
    const time = customizeDateAndTime(date * 1000, {
        hour: "numeric",
        minute: "numeric",
    });

    const hour = customizeDateAndTime(date * 1000, {
        hour: "numeric",
    });

    const minute = customizeDateAndTime(date * 1000, {
        minute: "numeric",
    });

    return {
        day,
        month,
        monthNumber,
        year,
        time,
        hour,
        minute,

    };
};
const diffTime = (time) => {
    let diffSecond = (new Date() - time * 1000) / 1000
    let message = ''
    if (time !== null) {
        switch (true) {
            case (diffSecond < 60) :
                message = 'چند لحظه پیش'
                break;
            case (diffSecond < 3600):
                message = numberFormat.toPersianDigits(Math.floor(diffSecond / 60) + ' دقیقه پیش')
                break;
            case (Math.floor(diffSecond / 3600) < 24):
                message = numberFormat.toPersianDigits(Math.floor(diffSecond / 3600) + ' ساعت پیش')
                break;
            case (Math.floor(diffSecond / 3600) < 48):
                message = `دیروز ساعت ${dateTimeCustom(time).hour}:${dateTimeCustom(time).minute}`
                break
            case (Math.floor(diffSecond / 3600) >= 48):
                message = numberFormat.toPersianDigits(
                    jMoment
                        .unix(time)
                        .format("jDD jMMMM jYYYY")
                )
        }
    }
    return message;
}
const timeToSecond = (hour, minute) => {
    return (hour * 3600) + (minute * 60)
}

function secondToTime(sec, seperate = false) {

    let sec_num = parseInt(sec, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seperate) {
        return [hours, minutes]
    } else {
        return hours + ':' + minutes;
    }
}

export default {
    dateTimeCustom,
    diffTime,
    timeToSecond,
    secondToTime

};
