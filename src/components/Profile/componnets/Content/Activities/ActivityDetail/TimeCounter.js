import { useEffect, useState } from "react"
import { numberFormat } from "../../../../../../utilities";

const TimeCounter = ({ activity }) => {
    const [diff, setDiff] = useState()
    let int;
    let now = new Date() * 1000 / 1000
    useEffect(() => {
        caclulateTime()
    }, [])

    useEffect(() => {
        caclulateTime()
    }, [activity])

    const caclulateTime = () => {
        if (!activity.active) 
            setDiff('غیر فعال')
        
        else if (activity.draft)
            setDiff('پیش نویس')
        
        else if (activity.startTime > now)
            setDiff('شروع نشده')
        
        else if (activity.endTime < now)
            setDiff('پایان یافته')
        
        else {
            let diff = 0
            diff = (activity.endTime - now) / 60000
            let hour = Math.floor(diff / 60)
            let minute = Math.floor(diff - (hour * 60))
            setDiff(numberFormat.toPersianDigits(hour) + ' : ' + numberFormat.toPersianDigits(minute))
        }
    }
    return (
        <>
            {diff}
        </>
    )
}

export default TimeCounter;