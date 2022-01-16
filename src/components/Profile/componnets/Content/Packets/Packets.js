import React, { Fragment, useEffect, useState } from "react";
import { getActivePacket, getUsageList, packetUpdateField } from "../../../../../../redux/packets";
import { connect, useDispatch, useSelector } from "react-redux";
import classes from "../../../../../assets/stylesheet/profile/packets.module.scss";
import { Grid, Paper, Avatar, Typography, MenuItem, Button } from "@material-ui/core";
import clsx from "clsx";
import jMoment from "moment-jalaali";
import Link from "next/link";
import PacketItem from "./PacketItem";
import BuyPacket from "../../../../BuyPacket";
import PacketSidebar from "../../../../../assets/images/profile/PacketSidebar";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import StyledMenu from "../../../../menu/StyledMenu";
import { dateTime, numberFormat } from "../../../../../utilities";
import { withSnackbar } from "notistack";
import InsertClassDialog from "../MyClass/InsertClass/Dialog";
import noDataIcon from "../../../../../assets/images/no_result_search.svg";
import ArrowForwardRoundedIcon from "../../../../../assets/images/arrowBack.svg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { infoSnackbar } from "../../../../../../redux/user";
import noResult from '../../../../../assets/images/no_result_search.svg'

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckList from '../../../../../assets/images/CheckList'
import { getActivityPacketChart, getActivityPackets } from "../../../../../../redux/activity/Actions";
import ActivityPackets from "./ActivityPackets";
import { useRouter } from "next/router";
const Packet = ({ enqueueSnackbar }) => {
    const Dispatch = useDispatch();
    const router = useRouter()
    const params = router.query

    const [anchorEl, setAnchorEl] = useState(null);
    const [openBuyPacket, setOpenBuyPacket] = useState(false);
    const slice = 8
    let packets = useSelector(
        (state) => state.packets.packets
    );


    let activityPackets = useSelector(
        (state) => state.activity.activityPackets
    );

    let activityPacketChart = useSelector(
        (state) => state.activity.activityPacketChart
    );

    let user = useSelector(
        (state) => state.user.user
    );

    useEffect(() => {

        if (params.id && params.success) {
            // setOpenBuyPacket(true)
            _openSelectUsers(params.type === 'upgrade', params.type === 'extend', params.packetType)
        }

    }, [params])
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    // const shamsiDay = (parseInt(numberFormat.toEnglishDigitsOnlyNum(dateTime.dateTimeCustom(Math.floor(startOfMonth / 1000)).day)) - 1) * 86400
    const shamsiDay = Math.floor(new Date().getTime() / 1000)
    const [verticalNumbers, setVerticalNumbers] = useState();
    const [date, setDate] = useState(dateTime.dateTimeCustom(Math.floor(new Date().getTime() / 1000)));
    const [unixDate, setUnixDate] = useState(Math.floor(new Date().getTime() / 1000));

    const [activityDate, setActivityDate] = useState(dateTime.dateTimeCustom(Math.floor(new Date().getTime() / 1000)));
    const [activityUnixDate, setActivityUnixDate] = useState(Math.floor(new Date().getTime() / 1000));
    // console.log('activityUnixDate', activityUnixDate)
    // console.log('shamsiDay', shamsiDay)

    const [day, setDay] = useState(true);

    const [activityDay, setActivityDay] = useState(true);

    const [maxUsers, setMaxUsers] = useState(0)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const isMobileXs = useMediaQuery(theme.breakpoints.down(321));
    useEffect(() => {
        !verticalNumbers && setVerticalNumbers(getVerticalNumbers(0, maxUsers))
    })
    useEffect(() => {
        packets && packets.length !== 0 && setMaxUsers(packets[0].pup.userCount)
        packets && packets.length !== 0 && setVerticalNumbers(getVerticalNumbers(0, packets[0].pup.userCount))
    }, [packets])

    useEffect(() => {
        !activityPackets && Dispatch(getActivityPackets(user.username))
    }, [activityPackets])


    useEffect(() => {
        !activityPacketChart && Dispatch(getActivityPacketChart(user.username, activityUnixDate * 1000, activityDay ? 'MONTHLY' : 'DAILY'))
    }, [activityPacketChart])


    function getVerticalNumbers(x, y) {
        let numbers = [];
        let step = y < 8 ? 1 : Math.round((y - x) / (slice - 1));


        for (let i = x; i < y; i = i + step) {
            numbers.push(i);
        }
        if (numbers.length === slice) {
            numbers[slice - 1] = y;
        } else if (numbers.length < slice) {
            numbers.push(y);

        }
        return numbers;
    }


    let usageList = useSelector(
        (state) => state.packets.usage
    );


    let usageLoaded = useSelector(
        (state) => state.packets.usageLoaded
    );

    let activityUsageLoaded = useSelector(
        (state) => state.activity.activityUsageLoaded
    );

    // console.log('packets', packets)
    useEffect(() => {
        if (!usageList) {
            Dispatch(getUsageList(day, unixDate));
        }
    }, [usageList]);
    useEffect(() => {
        if (!packets) {
            Dispatch(getActivePacket());
        }
    }, [packets]);
    // console.log('packets packets', packets?.result)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleChangeDate(dir) {
        switch (dir) {
            case `next`:
                if (day) {
                    let offset = dateTime.dateTimeCustom(Math.floor(unixDate)).monthNumber < 7 ? (86400 * 31) + 3600 : (86400 * 30) + 3600
                    setUnixDate(Math.floor(unixDate + (offset)));
                    setDate(dateTime.dateTimeCustom(Math.floor(unixDate + (offset))))
                    Dispatch(getUsageList(day, Math.floor(unixDate + (offset))));
                    // console.log(dateTime.dateTimeCustom(unixDate + (offset)))
                    // console.log(dateTime.dateTimeCustom(1611088200))

                } else {
                    setUnixDate(Math.floor(unixDate + (86400)));
                    setDate(dateTime.dateTimeCustom(Math.floor(unixDate + (86400))))
                    Dispatch(getUsageList(day, Math.floor(unixDate + (86400))));
                }
                break;
            case `prev`:
                if (day) {
                    let offset = dateTime.dateTimeCustom(Math.floor(unixDate)).monthNumber < 7 ? dateTime.dateTimeCustom(Math.floor(unixDate)).monthNumber === 1 ? (86400 * 29) : (86400 * 31) - 3600 : (86400 * 30)
                    setUnixDate(Math.floor(unixDate - (offset)));
                    setDate(dateTime.dateTimeCustom(Math.floor(unixDate - (offset))))
                    Dispatch(getUsageList(day, Math.floor(unixDate - (offset))));
                    // console.log(dateTime.dateTimeCustom(unixDate - (offset)))

                } else {
                    setUnixDate(Math.floor(unixDate - (86400)));
                    setDate(dateTime.dateTimeCustom(Math.floor(unixDate - (86400))))
                    Dispatch(getUsageList(day, Math.floor(unixDate - (86400))));
                }

                break;

        }
    }

    function handleChangeActivityDate(dir) {
        switch (dir) {
            case `next`:
                if (activityDay) {
                    let offset = dateTime.dateTimeCustom(Math.floor(activityUnixDate)).monthNumber < 7 ? (86400 * 31) + 3600 : (86400 * 30) + 3600
                    setActivityUnixDate(Math.floor(activityUnixDate + (offset)));
                    setActivityDate(dateTime.dateTimeCustom(Math.floor(activityUnixDate + (offset))))
                    Dispatch(getActivityPacketChart(user.username, Math.floor((activityUnixDate + (offset)) * 1000), activityDay ? 'MONTHLY' : 'DAILY'));
                    // console.log(dateTime.dateTimeCustom(unixDate + (offset)))
                    // console.log(dateTime.dateTimeCustom(1611088200))

                } else {

                    setActivityUnixDate(Math.floor(activityUnixDate + (86400)));
                    setActivityDate(dateTime.dateTimeCustom(Math.floor(activityUnixDate + (86400))))
                    Dispatch(getActivityPacketChart(user.username, Math.floor((activityUnixDate + (86400)) * 1000), activityDay ? 'MONTHLY' : 'DAILY'));
                }
                break;
            case `prev`:
                if (activityDay) {

                    let offset = dateTime.dateTimeCustom(Math.floor(activityUnixDate)).monthNumber < 7 ? dateTime.dateTimeCustom(Math.floor(activityUnixDate)).monthNumber === 1 ? (86400 * 29) : (86400 * 31) - 3600 : (86400 * 30)
                    setActivityUnixDate(Math.floor(activityUnixDate - (offset)));
                    setActivityDate(dateTime.dateTimeCustom(Math.floor(activityUnixDate - (offset))))
                    Dispatch(getActivityPacketChart(user.username, Math.floor((activityUnixDate - (offset)) * 1000), activityDay ? 'MONTHLY' : 'DAILY'));

                } else {

                    setActivityUnixDate(Math.floor(activityUnixDate - (86400)));
                    setActivityDate(dateTime.dateTimeCustom(Math.floor(activityUnixDate - (86400))))
                    Dispatch(getActivityPacketChart(user.username, Math.floor((activityUnixDate - (86400)) * 1000), activityDay ? 'MONTHLY' : 'DAILY'));
                }

                break;

        }
    }

    useEffect(() => {
        if (usageLoaded) {
            if (usageList.result?.usages.length < 29) {
                setDay(false)
                // console.log('channged', usageList.result?.usages)

            } else {
                setDay(true)
                // console.log('channged', usageList.result?.usages)

            }
            setUnixDate(usageList.result.usages[0].time);
            setDate(dateTime.dateTimeCustom(usageList.result.usages[0].time))
        }
    }, [usageLoaded])


    useEffect(() => {
        if (activityUsageLoaded) {
            if (activityPacketChart?.length < 29) {
                setActivityDay(false)
                console.log('now daily')
                // console.log('channged', activityPacketChart)

            } else {
                setActivityDay(true)
                console.log('now monthly')

                // console.log('channged', activityPacketChart)

            }
            console.log('Math.floor((activityPacketChart[0].createdAt)/1000)', dateTime.dateTimeCustom(Math.floor(1619250862)))
            setActivityUnixDate(Math.floor((activityPacketChart[0].createdAt) / 1000));
            setActivityDate((dateTime.dateTimeCustom(Math.floor((activityPacketChart[0].createdAt) / 1000))))
        }
    }, [activityUsageLoaded])



    function handleShowDay(data) {
        Dispatch(getUsageList(false, data.time));
        // setUnixDate(data.time);
        // setDate(dateTime.dateTimeCustom(data.time))
        // setDay(false)
    }

    function handleShowActivityDay(data) {
        Dispatch(getActivityPacketChart(user.username, data.createdAt, 'DAILY'));
        // setUnixDate(data.time);
        // setDate(dateTime.dateTimeCustom(data.time))
        // setDay(false)
    }


    function handleBackToMonth(data) {
        Dispatch(getUsageList(true, data.time));
        // setUnixDate(data.time);
        // setDate(dateTime.dateTimeCustom(data.time))
        // setDay(true)
    }


    function handleBackToActivityMonth(data) {
        Dispatch(getActivityPacketChart(user.username, data.createdAt, 'MONTHLY'));
        // setUnixDate(data.time);
        // setDate(dateTime.dateTimeCustom(data.time))
        // setDay(true)
    }

    const _openSelectUsers = (upgrade = false, extend = false, type = 'classPacket') => {
        // if (upgrade || extend){
        //     props.setCurrentPacket(details)
        // }
        setOpenBuyPacket(true)
        Dispatch(packetUpdateField({ prop: "openSelectUsers", value: true, upgrade: upgrade, extend: extend, type: type }))
    }

    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }

    return (

        <>
            {
                openBuyPacket &&
                <BuyPacket
                    handleClose={() => setOpenBuyPacket(false)}
                />
            }

            <div className={classes.packetsWrapper}>
                {isMobile && <div className={classes.breadCrumbRes}>
                    <Link href={`/profile/dashboard`}>
                        <div className={classes.breadCrumb}
                            style={packets && packets.length !== 0 ? { marginBottom: 25 } : {}}>
                            <img src={ArrowForwardRoundedIcon} alt="" />
                            <p>بسته ها</p>
                        </div>
                    </Link>
                </div>}
                {packets && packets.length !== 0 ?
                    <>
                        <div className={classes.packetHeaderMain}>
                            <div className={classes.currentPacketInfoContainer}>
                                {/* <div className={classes.packetIcon}>
                                    <PacketSidebar />
                                </div> */}
                                <div className={classes.currentPacketInfo}>
                                    <Typography className={classes.packetTitle}>اعتبار تشکیل کلاس آنلاین</Typography>
                                </div>
                            </div>
                        </div>
                        <div className={classes.packetHeader}>
                            <div className={classes.currentPacketInfoContainerSub}>

                                <div className={clsx(classes.currentPacketInfo, classes.pr20)}>
                                    <Typography style={{ marginBottom: isMobile ? 3 : 9 }}>{packets &&

                                        packets[0].statusTypeId === 439 ?
                                        `منقضی شده`
                                        :
                                        `تا ${numberFormat.toPersianDigits(
                                            jMoment
                                                .unix(packets[0].expireAt)
                                                .format("jDD jMMMM jYYYY")
                                        )}`}</Typography>
                                    <Typography>حداکثر <span> {packets && numberFormat.toPersianDigits(packets[0].pup.userCount)} </span> کاربر
                                        {!isMobileXs && ' همزمان '}</Typography>

                                </div>
                            </div>
                            <div className={packets[0]?.statusTypeId === 439 ? classes.packetBuyActions : classes.packetActions}>
                                {packets[0]?.statusTypeId === 439 || packets[0]?.gift ?
                                    <button className={clsx(classes.extendBtn)}
                                        onClick={() => _openSelectUsers(false, false, 'classPacket')}>
                                        <span>خرید بسته</span>
                                    </button>
                                    :
                                    !packets[0]?.gift &&
                                    <>
                                        <button className={clsx(classes.extendBtn, classes.extendWidth)}
                                            onClick={() => _openSelectUsers(false, true, 'classPacket')}>
                                            <span>تمدید</span>
                                        </button>
                                        <MoreVertIcon
                                            aria-controls="more"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <StyledMenu
                                            id="more"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            style={{
                                                marginTop: 40,
                                            }}


                                        >
                                            <MenuItem
                                                className={classes.packetMenuLink}
                                            >
                                                <div onClick={(e) => {
                                                    e.preventDefault()
                                                    _openSelectUsers(false, true, 'classPacket')
                                                    handleClose();
                                                }}>تمدید
                                                </div>
                                            </MenuItem>
                                            <MenuItem
                                                className={classes.packetMenuLink}
                                            >
                                                <div onClick={(e) => {
                                                    e.preventDefault()
                                                    _openSelectUsers(true, false, 'classPacket')

                                                    handleClose();
                                                }}>ارتقا
                                                </div>
                                            </MenuItem>
                                            {/* <MenuItem
                                                className={classes.packetMenuLink}
                                            >
                                                <div onClick={(e) => {
                                                    e.preventDefault()
                                                    handleClose();
                                                    handleComingSoon()
                                                }}>لغو
                                                </div>
                                            </MenuItem> */}
                                        </StyledMenu>
                                    </>
                                }

                            </div>
                        </div>
                        <div>
                            <PacketItem maxUsers={maxUsers} datas={usageList} date={date}
                                handleChangeDate={handleChangeDate}
                                verticalNumbers={usageList?.result?.tariffs ? [0, ...usageList?.result?.tariffs] : []}
                                handleShowDay={handleShowDay}
                                day={day}
                                handleBackToMonth={handleBackToMonth}

                            />
                        </div>
                    </>
                    :
                    !packets ?

                        <></>
                        :
                        <>
                            <div className={classes.packetHeaderMain}>
                                <div className={classes.currentPacketInfoContainer}>
                                    {/* <div className={classes.packetIcon}>
                                        <PacketSidebar />
                                    </div> */}
                                    <div className={classes.currentPacketInfo}>
                                        <Typography className={classes.packetTitle}>اعتبار تشکیل کلاس آنلاین</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(classes.packetHeader, classes.borderForNoPacket)} style={{ marginBottom: 31 }}>

                                <div className={clsx(classes.currentPacketInfo, classes.pr20)} style={{ width: '100%' }}>
                                    <Typography style={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <img src={noResult} style={{ width: 24, marginLeft: 9 }} />
                                        بسته فعال وجود ندارد
                                    </Typography>
                                </div>

                                <div className={classes.packetBuyActions}>
                                    <button className={clsx(classes.extendBtn)}
                                        onClick={() => _openSelectUsers(false, false, 'classPacket')}>
                                        <span>خرید بسته</span>
                                    </button>
                                </div>
                            </div>
                        </>
                }


                {/* activity packets */}

                <ActivityPackets
                    activityPackets={activityPackets}
                    // activityPackets={
                    //     {
                    //         content: [],
                    //         pageNumber: 0,
                    //         pageSize: 10,
                    //         totalElements: 0,
                    //         totalPages: 0
                    //     }
                    // }
                    packets={packets}
                    _openSelectUsers={_openSelectUsers}
                    handleComingSoon={handleComingSoon}
                    maxUsers={activityPackets?.content.length === 0 ? 0 : activityPackets?.content[0].pup.userCount}
                    usageList={activityPacketChart}
                    date={activityDate}
                    handleChangeDate={handleChangeActivityDate}
                    classUsageList={usageList}
                    handleShowDay={handleShowActivityDay}
                    day={activityDay}
                    handleBackToMonth={handleBackToActivityMonth}
                />
            </div>
        </>
    );
};

export default withSnackbar(Packet)
