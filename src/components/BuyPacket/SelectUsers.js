import React, { useEffect, useState } from "react"
import {
    Button,
    Typography,
} from "@material-ui/core"
import { numberFormat, required } from "../../utilities"
import classes from '../../assets/stylesheet/profile/buyPacket.module.scss';
import UsersIcon from '../../assets/images/UsersIcon'
import CalendarIcon from "../../assets/images/profile/registerOstad/CalendarIcon";
import jMoment from "moment-jalaali";
import { LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import ChistaDropdown from "../Kit/Dropdown/SingleSelectChistaDropdown";
import ModalLayoutWithHeader from "../Kit/Layouts/ModalLayoutWithHeader";
import closeIcon from '../../assets/images/close.svg'

function SelectUsers(props) {
    const [transition, setTransition] = React.useState(false)
    const [userCount, setUserCount] = React.useState(props.selectedPup || null)
    const [duration, setDuration] = React.useState(props.selectedPid || null)
    const [notValid, setNotValid] = React.useState(false);
    const [openPeopleCount, setOpenPeopleCount] = useState(false)
    const [openDuration, setOpenDuration] = useState(false)

    useEffect(() => {
        if (props.pup !== null)
            setUserCount(props.selectedPup !== null ? props.selectedPup : null)

    }, [props.pup, props.selectedPup])

    useEffect(() => {
        if (props.pid !== null)
            setDuration(props.selectedPid !== null ? props.selectedPid : null)

    }, [props.pid, props.selectedPid])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })

    const handleChangeUserCount = (e) => {
        setUserCount(e.target.value)
    }

    useEffect(() => {
        if (!duration && props.pid && props.selectedPid) {
            setDuration(props.selectedPid ? props.selectedPid : props.pid?.result[0].id)
        }
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })

    const handleChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    const handleNextStep = () => {
        if (userCount && duration) {
            setNotValid(false);
            props.handleNext(userCount, duration)
        } else {
            setNotValid(true);
        }
    }

    return (
        <ModalLayoutWithHeader
            openDialog={props.open}
            customBack
            closeModal={props.handleClose}
            classes={{
                scrollPaper: classes.dialog
            }}
            PaperProps={{ className: classes.root }}
            style={{ position: 'unset' }}
        >
            {props.load && <LinearProgress className={classes.loadingProgress} />}
            <div className={classes.modalHead}>
                <div>
                    <img src={closeIcon} onClick={props.handleClose} />
                    <p>{`${props.upgrade ? `ارتقا` : props.extend ? `تمدید` : `خرید`} بسته ${props.packetType === 'classPacket' ? 'کلاس آنلاین' : 'فعالیت'}`}</p>
                </div>
                <div className={classes.actionBtnContainer}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={() => handleNextStep()}
                        disabled={props.load}
                        className={clsx(classes.actionBtn, props.load && classes.actionBtnDisabled)}
                    >
                        بعدی
                    </Button>
                </div>
            </div>
            <div className={classes.BuyPacketContainer}>
                {props.extend ?
                    <ChistaDropdown
                        name='peopleCount'
                        title={props.packetType === 'activityPacket' ? `حداکثر تعداد کاربران ایجاد فعالیت` : `حداکثر تعداد کاربران همزمان حاضر در کلاس`}
                        isRequired
                        options={[{ title: `${numberFormat.toPersianDigits(props.currentUserCount)} نفر`, value: userCount }]}
                        icon={<UsersIcon />}
                        svgIcon
                        selectClassObject={{ select: classes.selectSelect }}
                        disabled={props.extend}
                        validate={[required]}
                        onChange={(e) => handleChangeUserCount(e)}
                        selectedValue={userCount}
                        style={{ marginBottom: 20 }}
                        open={openPeopleCount}
                        handleOpen={(e) => { setOpenPeopleCount(e) }}
                        handleClose={(e) => { setOpenPeopleCount(e) }}
                        handleChange={(e) => setUserCount(e.target.value)}
                    />
                    :
                    <ChistaDropdown
                        firstDisable
                        name='peopleCount'
                        isRequired
                        title={props.packetType === 'activityPacket' ? `حداکثر تعداد کاربران ایجاد فعالیت` : `حداکثر تعداد کاربران همزمان حاضر در کلاس`}
                        options={
                            props.pup && [
                                { title: `انتخاب کنید`, value: '000' }, ...props.pup?.result.map((item) => {
                                    return ({ title: `${numberFormat.toPersianDigits(item.userCount)} نفر`, value: item.id })
                                }
                                )] || []}
                        icon={<UsersIcon />}
                        svgIcon
                        disabled={props.extend}
                        validate={[required]}
                        onChange={(e) => handleChangeUserCount(e)}
                        selectedValue={userCount}
                        style={{ marginBottom: 20 }}
                        open={openPeopleCount}
                        handleOpen={(e) => { setOpenPeopleCount(e) }}
                        handleClose={(e) => { setOpenPeopleCount(e) }}
                        handleChange={(e) => setUserCount(e.target.value)}
                    />
                }
                {!userCount && notValid && <span className={classes.errorValid}>این فیلد اجباری است</span>}
                {props.upgrade ?
                    <Typography className={classes.upgradeNote}>
                        بسته شما حداکثر تا {props.expire && numberFormat.toPersianDigits(
                            jMoment
                                .unix(props.expire)
                                .format("jDD jMMMM jYYYY")
                        )} اعتبار دارد
                    </Typography>
                    :
                    <ChistaDropdown
                        firstDisable
                        name='duration'
                        isRequired
                        title="طول مدت بسته"
                        icon={<CalendarIcon />}
                        svgIcon
                        disabled={props.upgrade}
                        options={
                            props.pid && [{ title: `انتخاب کنید`, value: '000' }, ...props.pid?.result.map((item) => {
                                return ({ title: `${numberFormat.toPersianDigits(item.interval)} ماه`, value: item.id })
                            }
                            )] || []}
                        validate={[required]}
                        onChange={(e) => handleChangeDuration(e)}
                        selectedValue={duration}
                        open={openDuration}
                        handleOpen={(e) => { setOpenDuration(e) }}
                        handleClose={(e) => { setOpenDuration(e) }}
                        handleChange={(e) => setDuration(e.target.value)}
                    />
                }
                {!duration && notValid && <span className={classes.errorValid}>این فیلد اجباری است</span>}
            </div>
        </ModalLayoutWithHeader>
    )
}

export default SelectUsers