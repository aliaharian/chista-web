import React from "react";
import CryptoJS from 'crypto-js';

const objectToArray = (json) => {
    var array = [];
    Object.keys(json).forEach((key) => array.push(json[key]));
    return array;
};
var CRYPT_FUNCTION = "AES";
var CRYPT_KEY = "3mO38C0u3r93lzcu";
function hashThis(text, encrypt) {
    try {

        var keyHex = CryptoJS.enc.Utf8.parse(CRYPT_KEY);

        if (encrypt) {
            var encryptedData = CryptoJS.AES.encrypt(text, keyHex,

                { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
            );
            // console.log("encryptedData = " + encryptedData);
            return encodeURIComponent(encryptedData);
        }
        else {
            var decryptedData = CryptoJS.AES.decrypt(text, keyHex,

                { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
            );
            var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
            // console.log("decryptedText = " + decryptedText);
            return decryptedText;
        }
    } catch (e) { console.log("Exception@encrypt:", text, "Message:", e.message); return null }
}
const AvatarColorByName = (name) => {
    let letter = name?.charAt(0)?.toLowerCase();
    let finalColor = "tile_color_9"
    let letterCategories = [
        {
            color: 'tile_color_1',
            letters: [
                '1',
                's',
                'i',
                '۹',
                'ه',
                'ع',
                'ذ',
                'آ',
                'ا',
            ]
        },
        {
            color: 'tile_color_2',
            letters: [
                'ب',
                'ر',
                'ع',
                'ی',
                '۰',
                'j',
                't',
                '2',
            ]
        },
        {
            color: 'tile_color_3',
            letters: [
                'پ',
                'ز',
                'ف',
                '۱',
                'a',
                'k',
                'u',
                '3',
            ]
        },
        {
            color: 'tile_color_4',
            letters: [
                'ت',
                'ژ',
                'ق',
                '۲',
                'b',
                'l',
                'v',
                '4',
            ]
        },
        {
            color: 'tile_color_5',
            letters: [
                'ث',
                'س',
                'ک',
                '۳',
                'c',
                'm',
                'w',
                '5',
            ]
        },
        {
            color: 'tile_color_6',
            letters: [
                'ج',
                'ش',
                'گ',
                '۴',
                'd',
                'n',
                'x',
                '6',
            ]
        },
        {
            color: 'tile_color_7',
            letters: [
                'چ',
                'ص',
                'ل',
                '۵',
                'e',
                'o',
                'y',
                '7',
            ]
        },
        {
            color: 'tile_color_8',
            letters: [
                'ح',
                'ض',
                'م',
                '۶',
                'f',
                'p',
                'z',
                '8',
            ]
        },
        {
            color: 'tile_color_9',
            letters: [
                'خ',
                'ط',
                'ن',
                '۷',
                'g',
                'q',
                '9',
            ]
        },
        {
            color: 'tile_color_10',
            letters: [
                'د',
                'ظ',
                'و',
                '۸',
                'h',
                'r',
                '0',
            ]
        }
    ];
    for (let i = 0; i < letterCategories.length; i++) {
        let cat = letterCategories[i];
        let color = cat.color;
        if (cat.letters.includes(letter)) {
            finalColor = color;
            break;
        }
    }
    return finalColor;
}
const objectAppendToArray = (json, array) => {
    Object.keys(json).forEach((key) => array.push(json[key]));
    return array;
};

const fullName = (user) => {
    let name = ''
    name += user.firstName !== undefined ? user.firstName : ''
    name += user.lastName !== undefined ? ' ' + user.lastName : ''
    return name
}
function getCookie(name, cookie) {
    const value = `; ${cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const contactDiff = (b1, b2) => {

    return b1.filter(item1 =>
        !b2.some(item2 => (item2.username === item1.username || item2.phone === item1.phone)))
}

const chunkArray = (arr, size) => {
    if (!arr) {
        return [];
    }

    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const getFirstLetter = (str) => {
    if (!str) return "";

    for (let char of str) {
        if (char.toUpperCase() !== char.toLowerCase()) {
            return char;
        } else if (char >= "0" && char <= "9") {
            return char;
        } else if (char.length > 1) {
            return char;
        }
    }

    return "";
};

const getLetters = (title) => {
    if (!title) {
        return "";
    }
    return title.charAt(0);
};

const getImage = (url) => {
    if (!url) {
        return null;
    }
    return process.env.REACT_APP_IMAGE_URL + url;
};

const GenerateUUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );

const isMobileSSR = (userAgent) => {
    const Android = () => {
        return userAgent.match(/Android/i);
    };
    const BlackBerry = () => {
        return userAgent.match(/BlackBerry/i);
    };
    const iOS = () => {
        return userAgent.match(/iPhone|iPad|iPod/i);
    };
    const Opera = () => {
        return userAgent.match(/Opera Mini/i);
    };
    const Windows = () => {
        return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i);
    };
    return Android() || BlackBerry() || iOS() || Opera() || Windows()
        ? true
        : false;
};

const getBrowserVersionForWebrtc = () => {
    let ua = navigator.userAgent, tem,
        m = ua.match(/(opera|chrome|safari|CriOS|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (((m[1] === 'Chrome' || m[1] === 'CriOS') && m[2] < 60) ||
        (m[1] === 'Firefox' && m[2] < 69) ||
        (m[1] === 'Opera' && m[2] < 39)) {
        return false;
    } else if (m[1] === 'MSIE' || m[1] === 'Edge') {
        return 'IE'
    } else if (m[1] === 'Safari') {
        return 'Safari'
    } else {
        return true;
    }
}

const getBrowserName = () => {
    let ua = navigator.userAgent, tem,
        m = ua.match(/(opera|chrome|safari|CriOS|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return m[1]
}

const parseStatus = (status, classes) => {
    switch (status) {
        case process.env.REACT_APP_STATUS_ONLINE:
            return classes.statusOnline;
        case process.env.REACT_APP_STATUS_BUSY:
            return classes.statusBusy;
        case process.env.REACT_APP_STATUS_OFFLINE:
            return classes.statusOffline;
        default:
            return classes.statusOnline;
    }
};

const customizeDateAndTime = (time, options) => {
    // We need to use a try-catch here to support IE11!

    try {
        return options
            ? new Intl.DateTimeFormat("fa-FA", options).format(time)
            : new Intl.DateTimeFormat("fa-FA").format(time);
    } catch (err) {
        return options
            ? new Intl.DateTimeFormat("en-GB", options).format(time)
            : new Intl.DateTimeFormat("en-GB").format(time);
    }
};

const objectToQeryparams = (obj) => {
    return Object.keys(obj)
        .map((key) => {
            if (obj[key] === "") {
                return;
            }
            return key + "=" + obj[key];
        })
        .join("&");
};

const tileColor = (userId) => {
    return `tile_color_${(Math.abs(userId) % 8) + 1}`;
};
const secondsToHms = (seconds) => {
    if (!seconds) return "";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
        return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
        return `${sec}s`;
    } else {
        return `${min}m ${sec}s`;
    }
};
const secondsToH = (seconds) => {
    if (!seconds) return `0 دقیقه`;

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (parseInt(hours, 10) > 0) {
        const h = parseInt(hours, 10);
        if (min >= 30) {
            return `${h + 1} ساعت`;
        }
        return `${h} ساعت`;
    } else if (min == 0) {
        return `0 دقیقه`;
    } else {
        return `${min} دقیقه`;
    }
};

const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result);
    };
    reader.onerror = function (error) {
        console.log("Error: ", error);
    };
};

const periodConflict = (startA, endA, startB, endB) => {
    return ((!((startA <= startB && endA <= startB) || (startA >= endB && endA >= endB))) || (startA === startB && endA === endB));
}


export default {
    objectToArray,
    objectAppendToArray,
    chunkArray,
    getImage,
    GenerateUUID,
    isMobileSSR,
    getLetters,
    parseStatus,
    tileColor,
    secondsToHms,
    secondsToH,
    customizeDateAndTime,
    objectToQeryparams,
    getBase64,
    getBrowserVersionForWebrtc,
    fullName,
    contactDiff,
    periodConflict,
    getCookie,
    hashThis,
    getBrowserName,
    AvatarColorByName
};
export const sorting = ["آ", "ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
    "ک", "گ", "ل", "م", "ن", "و", "ه", "ی", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    , "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#"
];