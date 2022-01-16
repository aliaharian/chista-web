const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toPersianDigits = (value) => {
    const charCodeZero = "۰".charCodeAt(0);
    return String(value).replace(/[0-9]/g, (w) =>
        String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
    );
};

const toPersianDigitsPutCommas = (value) => {
    const charCodeZero = "۰".charCodeAt(0);
    if (!value) {
        return value;
    }
    console.log(value);
    let pValue = putCommas(toEnglishDigitsOnlyNum(value));
    return String(pValue).replace(/[0-9]/g, (w) =>
        String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
    );
};
const toEnglishDigits = (value) => {
    const charCodeZero = "۰".charCodeAt(0);
    return value.replace(/[۰-۹]/g, (w) => w.charCodeAt(0) - charCodeZero);
};

const toEnglishDigitsOnlyNum = (value) => {
    const charCodeZero = "۰".charCodeAt(0);
    if (!value) {
        return value;
    }
    const enValue = value.replace(
        /[۰-۹]/g,
        (w) => w.charCodeAt(0) - charCodeZero
    );
    return enValue.replace(/[^\d]/g, "");
};
const toTime = (seconds, format = "00:00") => {
    let temp = seconds;
    let string = "";
    let c;
    while (temp) {
        c = `0${temp % 60}`.slice(-2);
        temp = Math.floor(temp / 60);
        string = `${c}:${string}`;
    }
    string = `${format}:${string}`.substr(-format.length - 1);
    if (string) return toPersianDigits(string.slice(0, -1));
    return 0;
};

const phoneMask = (value, previousValue) => {
    if (!value) {
        return value;
    }
    let onlyNums = toEnglishDigitsOnlyNum(value);
    onlyNums = toPersianDigits(onlyNums);
    if (!previousValue || value.length > previousValue.length) {
        // typing forward
        if (onlyNums.length === 4) {
            return onlyNums + "-";
        }
        if (onlyNums.length === 7) {
            return onlyNums.slice(0, 4) + "-" + onlyNums.slice(4, 7) + "-";
        }
    }
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 7) {
        return onlyNums.slice(0, 4) + "-" + onlyNums.slice(4, 7);
    }
    return (
        onlyNums.slice(0, 4) +
        "-" +
        onlyNums.slice(4, 7) +
        "-" +
        onlyNums.slice(7, 11)
    );
};
const nationalCodeMask = (value, previousValue) => {
    if (!value) {
        return value;
    }
    let onlyNums = toEnglishDigitsOnlyNum(value);
    onlyNums = toPersianDigits(onlyNums);
    if (!previousValue || value.length > previousValue.length) {
        // typing forward
        if (onlyNums.length === 3) {
            return onlyNums + "-";
        }
    }
    if (onlyNums.length <= 3) {
        return onlyNums;
    }
    if (onlyNums.length >= 10) {
        return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, 10);
    }

    return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, onlyNums.length);
};

const shebaMask = (value, previousValue) => {
    if (!value) {
        return value;
    }
    let onlyNums = toEnglishDigitsOnlyNum(value);
    onlyNums = toPersianDigits(onlyNums);
    let newNum = "";
    let onlyNumsArray = onlyNums.split("");
    for (let i = 0; i < onlyNumsArray.length; i++) {
        newNum += onlyNumsArray[i];
        if ((i + 1) % 4 === 0 && i + 1 > 0 && i + 1 < 23) {
            newNum += "-";
        }
    }
    return newNum;
};

const putCommas = (str) => Number(str).toLocaleString();
const toOff = (value) => toEnglishDigits(value).replace(/\D/g, "");
const toOn = (value) => (value ? toPersianDigits(putCommas(value)) : "");

const toOnReduxForm = (value) => value && toOn(toOff(value));

const toPersianSeprateTomanCommas = (toman) =>
    toPersianDigits(toman.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

const removeLastComma = (str) => {
    if (!str) {
        return;
    }
    var sentence = str;
    var pattern = /,/g;
    if (str.indexOf(",") == -1) pattern = /،/g;
    var currentIndex;
    while (pattern.test(sentence) == true) {
        currentIndex = pattern.lastIndex;
    }
    if (currentIndex == sentence.trim().length)
        return sentence.substring(0, currentIndex - 1);
    else return sentence;
};


export default {
    toPersianDigits,
    toEnglishDigits,
    toTime,
    putCommas,
    toOff,
    toOn,
    phoneMask,
    toOnReduxForm,
    toEnglishDigitsOnlyNum,
    nationalCodeMask,
    shebaMask,
    toPersianDigitsPutCommas,
    toPersianSeprateTomanCommas,
    removeLastComma,

};
