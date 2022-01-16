const toEnglishDigits = (value) => {
  const charCodeZero = "۰".charCodeAt(0)
  return value.replace(/[۰-۹]/g, (w) => w.charCodeAt(0) - charCodeZero)
}
const normalizeMoney = (params) => {
  if (!params) {
    return params
  }

  const englishNum = toEnglishDigits(params)

  return englishNum
    .toString()
    .replace(/[^\d]/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default normalizeMoney
