
export const convertNumberToLetter = (num) => {
    const arabicNumbers = "۰۱۲۳۴۵۶۷۸۹"
    let result = ""
    const str = num.toString();
    for(let c of str){
        result += arabicNumbers.charAt(c)
    }
    return result
}
export const toEnglishDigits = (value) => {
    const charCodeZero = "۰".charCodeAt(0);
    return value.replace(/[۰-۹]/g, (w) => w.charCodeAt(0) - charCodeZero);
};
export const getNumber = (value) => {
    value = toEnglishDigits(value);
    return value.replace(/[^\d]/g, '');
}
export const checkPersianNumbersRegex = (value) => {
    return /^[\u06F0-\u06F90-9]+$/.test(value)
}

export const checkEnglishNumbersRegex = (value) => {
    return /^[0-9\b]+$/.test(value)
}