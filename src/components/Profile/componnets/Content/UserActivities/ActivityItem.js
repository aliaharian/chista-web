import { Button, Grid, LinearProgress, Typography, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import CheckList from '../../../../../assets/images/CheckList'
// import useStyles from './Styles'
import clockIcon from '../../../../../assets/images/Clock.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { numberFormat } from '../../../../../utilities';
import OpenActivityModal from './openActivityModal/OpenActivityModal';
import { useState } from 'react';
import axios from 'axios'
import doneIcon from '../../../../../assets/images/checkBlue.svg'
import azmoonIcon from '../../../../../assets/images/azmoonIcon.svg'
import taklifIcon from '../../../../../assets/images/taklifIcon.svg'
import etcActivityIcon from '../../../../../assets/images/etcActivityIcon.svg'
import classes from '../../../../../../src/assets/stylesheet/profile/activities/activityItem.module.scss';
import ChistaButton from '../../../../Kit/Buttons/ChistaButton';

function ActivityItem({ data, handleActive }) {

    // const classes = useStyles()
    const now = new Date() * 1000 / 1000
    const t = (data.endTime - now) / 60000
    const n = data.questionsCount
    const [openActivityModal, setOpenActivityModal] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState()
    const user = useSelector((state) => state.user.user)
    const Router = useRouter();
    const barColor = () => {
        if (n > 5) {
            if (t > 500) {
                return '#00dbb5'
            } else if (t <= 50 * n && t >= 10 * n) {
                return '#ffd12f'
            } else {
                return '#ff6575'
            }
        } else {
            if (t > 300) {
                return '#00dbb5'
            } else if (t >= 60) {
                return '#ffd12f'
            } else {
                return '#ff6575'
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

    function toFixedIfNecessary(value, dp) {
        return +parseFloat(value).toFixed(dp);
    }
    const handleOpenActivity = async (data) => {
        if (data.startTime <= now) {
            // setSelectedActivity(data)
            if (data.duration && data.endTime > now) {
                const examinees = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/page`, {
                    "filter": "activityId=" + data.id,
                    "pageSize": 10000
                });
                let examinee = examinees.data.content.find(x => x.memberInfo.phone == user.username)
                let diff = examinee.startTime ? ((examinee.startTime + data.duration * 60000) - now) / 1000 : data.duration * 60
                let diff2 = (data.endTime - now) / 1000
                if (diff2 < diff) diff = diff2;

                // if (examinee.startTime) {
                console.log('diff', diff)
                if (diff > 0) {
                    if (diff > 3600) {
                        setSelectedActivity({ ...data, duration: Math.floor(diff / 3600), durationType: 'hour' })
                    } else if (diff > 60) {
                        setSelectedActivity({ ...data, duration: Math.floor(diff / 60), durationType: 'minute' })
                    } else {
                        setSelectedActivity({ ...data, duration: Math.floor(diff), durationType: 'second' })
                    }
                } else {
                    setSelectedActivity({ ...data, duration: Math.floor(diff), durationType: 'none' })
                }
                // }
                //  else {
                //     setSelectedActivity({ ...data, durationType: 'minute' })
                // }
                setOpenActivityModal(true)
            } else {
                // Router.push({
                //     pathname: `/profile/dashboard/activity/${data.id}`,
                //     query: {},
                //   }, undefined, { scroll: true })
                Router.push(`/profile/dashboard/activity/${data.id}`).then(() => window.scrollTo(0, 0))
            }
        } else {
            console.log('denied')
        }
    }
    return (
        <Grid className={clsx(classes.activityItem)}>
            {openActivityModal &&
                <OpenActivityModal
                    closeModal={() => setOpenActivityModal(false)}
                    showModal={openActivityModal}
                    handelSubmit={() => {
                        Router.push(`/profile/dashboard/activity/${selectedActivity.id}`)
                    }}
                    duration={selectedActivity.duration}
                    durationType={selectedActivity.durationType}
                />}
            <div className={clsx(classes.activityItemChild
                // , (data.endTime < now) && classes.disabledColor
            )}>
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
                            <Typography style={{ maxWidth: 100 }} noWrap>{data.activityType === 'EXAM' ? `آزمون` : data.activityType === 'ASSIGNMENT' ? `تکلیف` : data.activityTypeOther || `سایر`} - {data.name}</Typography>
                            <Typography style={{ maxWidth: 100 }} noWrap>{data.classInfo?.title}</Typography>
                        </div>
                    </div>
                    {/* <div>

                        <Button
                            className={clsx(
                                classes.statusWrapper,
                                classes.statusWrapperActive,
                                (data.startTime > now) && classes.disabledBtn
                            )}
                            onClick={() => handleOpenActivity(data)}
                        >
                            <span>مشاهده</span>
                        </Button>
                    </div> */}

                    <div className={classes.viewActivityBtnContainer}>
                        <ChistaButton
                            disabled={data.startTime > now}
                            customClassName={(data.startTime > now) && classes.disabledBtn}
                            onClick={() => handleOpenActivity(data)}
                        >
                            مشاهده
                        </ChistaButton>
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
                <div className={classes.activityInfo}>
                    <div>
                        <img src={clockIcon} />
                        <Typography >{caclulateTime()}</Typography>
                    </div>
                    <div>
                        {
                            data.active &&
                                data.draft ?
                                <Typography></Typography>
                                :
                                data.myActivityInfo.corrected ?
                                    <Typography>
                                        {(data.myActivityInfo.score !== undefined) ? numberFormat.toPersianDigits(toFixedIfNecessary(data.myActivityInfo.score, 2)) + ' از ' + numberFormat.toPersianDigits(data.scoring) : data.myActivityInfo.descriptiveScore}
                                    </Typography>
                                    :
                                    data.myActivityInfo.done ?
                                        <div className={classes.doneContainer}>
                                            <img src={doneIcon} />
                                            <Typography>انجام شده</Typography>
                                        </div>
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