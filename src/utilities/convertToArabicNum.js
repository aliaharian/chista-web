const arabicNumbers = "۰۱۲۳۴۵۶۷۸۹"
export const convertNumberToLetter = (num) => {
    let result = ""
    const str = num.toString();
    for(let c of str){
        result += arabicNumbers.charAt(c)
    }
    return result
}