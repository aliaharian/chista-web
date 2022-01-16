import { Button, Grid, LinearProgress, Typography, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import CheckList from '../../../../../assets/images/CheckList'
import useStyles from './Styles'
import clockIcon from '../../../../../assets/images/Clock.svg'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { numberFormat } from '../../../../../utilities';
import azmoonIcon from '../../../../../assets/images/azmoonIcon.svg'
import taklifIcon from '../../../../../assets/images/taklifIcon.svg'
import etcActivityIcon from '../../../../../assets/images/etcActivityIcon.svg'

function ActivityItem({ data, handleActive, handleCompleteActivity }) {
    const classes = useStyles()

    const now = new Date() * 1000 / 1000
    const t = (data.endTime - now) / 60000
    const n = data.questionsCount
    const k = data.endTime - data.startTime;
    const Router = useRouter();

    const barColor = () => {
        if (n > 5) {
            if (t > 500) {
                return '#00dbb5'  //red
            } else if (t <= 50 * n && t >= 10 * n) {
                return '#ffd12f' //orange
            } else {
                return '#ff6575' //green
            }
        } else {
            if (t > 300) {
                return '#00dbb5' //red
            } else if (t >= 60) {
                return '#ffd12f' //orange
            } else {
                return '#ff6575'  //green
            }
        }
    }
    const caclulateTime = () => {
        let diff = 0
        if (data.draft) {
            return 'پیش نویس'
        } else if (!data.active) {
            return 'غیر فعال'
        }
        else if (data.startTime > now) {
            diff = (data.startTime - now) / 60000
            if (diff > 1440) {
                return numberFormat.toPersianDigits(Math.floor(diff / 1440)) + ' روز مانده به شروع'
            }
            else if (diff > 60) {
                return numberFormat.toPersianDigits(Math.floor(diff / 60)) + ' ساعت مانده به شروع'
            } else if (diff > 1) {
                return numberFormat.toPersianDigits(Math.floor(diff)) + ' دقیقه مانده به شروع'
            } else {
                return numberFormat.toPersianDigits(Math.floor(diff * 60)) + ' ثانیه مانده به شروع'
            }
        } else if (data.endTime < now) {
            return 'به پایان رسیده'
        } else {
            diff = (data.endTime - now) / 60000
            if (diff > 1440) {
                return numberFormat.toPersianDigits(Math.floor(diff / 1440)) + ' روز مانده به پایان'
            }
            else if (diff > 60) {
                return numberFormat.toPersianDigits(Math.floor(diff / 60)) + ' ساعت به پایان'
            } else if (diff > 1) {
                return numberFormat.toPersianDigits(Math.floor(diff)) + ' دقیقه به پایان'
            } else {
                return numberFormat.toPersianDigits(Math.floor(diff * 60)) + ' ثانیه به پایان'
            }
        }
    }

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 5,
            width: '100%',
            borderRadius: 7,
        },
        colorPrimary: {
            backgroundColor: data.endTime < now ? '#0c0b3129' : '#ebebef',
        },
        bar: {
            borderRadius: 5,
            backgroundColor: barColor(),
        },
    }))(LinearProgress);

    return (
        <Grid className={clsx(classes.activityItem)}>
            <div className={clsx(classes.activityItemChild, (!data.active || data.draft) && classes.disabledColor)}>
                <div className={classes.activityTitleContainer}>
                    <div>
                        <div>
                            {
                                data.activityType === 'ASSIGNMENT' ?
                                    <img src={taklifIcon} />
                                    :
                                    data.activityType === 'EXAM' ?
                                        <img src={azmoonIcon} />
                                        :
                                        <img src={etcActivityIcon} />
                            }
                        </div>
                        <div>
                            <Typography noWrap style={{ maxWidth: 130 }}>{data.activityType === 'EXAM' ? `آزمون` : data.activityType === 'ASSIGNMENT' ? `تکلیف` : data.activityTypeOther || `سایر`} - {data.name}</Typography>
                            <Typography noWrap style={{ maxWidth: 130 }}>{data.classInfo?.title}</Typography>
                        </div>
                    </div>
                    <div>
                        <Button
                            className={clsx(
                                classes.statusWrapper,
                                classes.statusWrapperActive,
                                classes.addClass,
                                (!data.active || data.draft) && classes.disabledColor
                            )}
                            onClick={() => {
                                data.draft ?
                                    handleCompleteActivity()
                                    :
                                    Router.push(`/profile/dashboard/ostad/activity/${data.id}`)
                            }}
                        >
                            {
                                data.draft ?
                                    <span>تکمیل</span>
                                    :
                                    <span>مشاهده</span>
                            }
                        </Button>
                    </div>
                </div>
                <div className={classes.activityProgress}>
                    {
                        (data.startTime < now && data.endTime > now && data.active) ?
                            <BorderLinearProgress variant="determinate" value={(now - data.startTime) / (data.endTime - data.startTime) * 100} />
                            :
                            <BorderLinearProgress variant="determinate" value={0} />
                    }
                </div>
                <div className={clsx(classes.activityInfo, (!data.active || data.draft) && classes.importantDisabledColor)}>
                    <div>
                        <img src={clockIcon} />
                        <Typography >{caclulateTime()}</Typography>
                    </div>
                    <div>
                        {
                            data.draft ?
                                <Typography></Typography>
                                :
                                !data.active ?
                                    (data.endTime > now) ?
                                        <Typography onClick={() => handleActive(data.id)} className={classes.activate}>فعال سازی</Typography>
                                        :
                                        <Typography></Typography>
                                    :
                                    data.corrected ?
                                        <Typography>تصحیح شده</Typography>
                                        :
                                        <Typography>تصحیح نشده</Typography>
                        }
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default ActivityItem;