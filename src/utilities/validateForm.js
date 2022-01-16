import { numberFormat } from "."

export const required = (value) =>
    value || typeof value === "number" ? undefined : "این فیلد را وارد نمایید"

export const requiredCustom = (value , label) =>
    value || typeof value === "number" ? undefined : `${label} الزامی است`


export const nameRequired = (value) =>
    value || typeof value === "number" ? undefined : "فیلد نام اجباری است"

export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `تعداد کاراکتر نباید بیشتر از ${numberFormat.toPersianDigits(max)} باشد`
    : undefined
export const maxLength4 = maxLength(4)
export const maxLength10 = maxLength(10)
export const maxLength20 = maxLength(20)
export const maxLength24 = maxLength(24)
export const maxLength25 = maxLength(25)
export const maxLength40 = maxLength(40)
export const maxLength1000 = maxLength(1000)
export const minLength = (min) => (value) =>
  value && value.length < min
    ? `تعداد کاراکتر نباید کمتر از ${numberFormat.toPersianDigits(min)} باشد`
    : undefined
export const minLength3 = minLength(3)
export const minLength2 = minLength(2)
export const minLength4 = minLength(4)
export const minLength5 = minLength(5)
export const minLength10 = minLength(10)
export const minLength16 = minLength(16)
export const minLength24 = minLength(24)
export const maxLength30 = maxLength(30)
export const isLength = (min) => (value) =>
  value && value.length != min ? `تعداد کاراکتر باید ${numberFormat.toPersianDigits(min)} باشد` : undefined
export const isLength2 = isLength(2)
export const isLength3 = isLength(3)
export const number = (value) =>
  value && !Number.isInteger(Number(numberFormat.toEnglishDigits(value)))
    ? "باید یک عدد باشد"
    : undefined
export const up1000 = (value) =>
  value && numberFormat.toOff(value) < 1000 ? "حداقل باید ۱۰۰۰ باشد" : undefined
export const up100000 = (value) =>
  value && numberFormat.toOff(value) < 100000
    ? "حداقل باید ۱۰۰۰۰۰ باشد"
    : undefined
export const minValue = (min) => (value) =>
  value && value < min ? `نباید کمتر از ${numberFormat.toPersianDigits(min)} باشد` : undefined
export const minValue13 = minValue(13)
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "ایمیل نامعتبر است"
    : undefined
export const isPhone = (value) =>{
    if(!value) {return false}
    let enValue=numberFormat.toEnglishDigitsOnlyNum(value)
    return enValue && !/^(09[0-9][0-9]{8})$/i.test(enValue)
    ? "شماره وارد شده نامعتبر است"
    : undefined
}
export const imageIsRequired = (value) =>{
   return !value ? "عکس مورد نظر را انتخاب کنید" : undefined
}

export const justPersian = (str) =>{
  const p = /^[\u0600-\u06FF\s]+$/;
   return !p.test(str) ? "مقدار این فیلد باید فارسی باشد" : undefined
}

  

export const isValidAmount = (value) => {
    const min = 4;
    let error = number(value);
    if (!error) {
        error = value && value.length < min ? ` نباید کمتر از ${min}رقم باشد` : undefined
    }
    return error;
}

export const isValidNationalCode = (code) => {
  code = numberFormat.toEnglishDigitsOnlyNum(code?.replace('-', ''));
  var allDigitEqual = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"];
  var rtn = true;
  var msg = "کد ملی درست نیست";
  for (var i in allDigitEqual) {
      if (allDigitEqual[i].indexOf(code) != -1) {
          rtn = false;
          break;
      }
  }
  if (!rtn) return msg;
  var L = code.length;
  if (L < 8 || parseInt(code, 10) == 0) return msg;
  code = ('0000' + code).substr(L + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) == 0) return msg;
  var c = parseInt(code.substr(9, 1), 10);
  var s = 0;
  for (var i = 0; i < 9; i++)
      s += parseInt(code.substr(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == (11 - s)) ? undefined : msg;
  return undefined;
}
