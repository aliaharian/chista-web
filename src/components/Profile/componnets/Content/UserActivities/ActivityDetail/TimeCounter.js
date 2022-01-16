import { useEffect, useState } from "react"
import { numberFormat } from "../../../../../../utilities";

const TimeCounter = ({ examinee, activity, startTime, callEnd }) => {
    const [diff, setDiff] = useState()
    let int;
    let now = new Date() * 1000 / 1000

    useEffect(() => {
        caclulateTime()
        // console.log('did!')
        return () => {
            clearInterval(int)
            // console.log('cleared!')

        }
    }, [])


    const caclulateTime = () => {
        let diff = 0
        let diff2 = 0
        let hour
        let minute

        let second
        int = setInterval(() => {
            if (!activity.active) {
                setDiff('غیر فعال')
            }
            else if (activity.draft) {
                setDiff('پیش نویس')
            }
            else if (activity.startTime > now) {
                setDiff('شروع نشده')
            }

            else if (activity.endTime < now) {
                setDiff('پایان یافته')
            }
            now = new Date() * 1000 / 1000
            if (!activity.duration) {
                diff = (activity.endTime - now) / 1000
            } else {
                diff = examinee.startTime ? ((examinee.startTime + activity.duration * 60000) - now) / 1000 : activity.duration * 60
                diff2 = (activity.endTime - now) / 1000
                if (diff2 < diff) diff = diff2;
            }
            // diff = activity.duration ? ((startTime + activity.duration * 60000) - now) / 1000 : (activity.endTime - now) / 1000


            // console.log('diff',diff)
            // console.log('start',startTime)
            if (diff > 0) {
                hour = Math.floor(diff / 3600)
                minute = Math.floor((diff - (hour * 3600)) / 60)
                second = Math.floor(diff - (hour * 3600) - (minute * 60))
                setDiff(numberFormat.toPersianDigits(hour) + ' : ' + numberFormat.toPersianDigits(minute))
                // setDiff(numberFormat.toPersianDigits(hour) + ' : ' + numberFormat.toPersianDigits(minute) + ' : ' + numberFormat.toPersianDigits(second))
            } else {
                // setDiff(``)
                callEnd()

            }
        }, 1000)

    }
    return (<>
        {diff}
    </>)

}

export default TimeCounter;