import React, { Fragment, useEffect, useState } from "react";
import classes from "../../../../../assets/stylesheet/profile/packets.module.scss";
import { Typography, MenuItem, Button, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";
import jMoment from "moment-jalaali";
import Link from "next/link";
import PacketItem from "./PacketItem";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import StyledMenu from "../../../../menu/StyledMenu";
import { numberFormat } from "../../../../../utilities";

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckList from '../../../../../assets/images/CheckList'
import noResult from '../../../../../assets/images/no_result_search.svg'
import ActivityPacketItem from "./ActivityPacketItem";
function ActivityPackets({
    activityPackets,
    packets,
    _openSelectUsers,
    handleComingSoon,
    maxUsers,
    usageList,
    date,
    handleChangeDate,
    classUsageList,
    handleShowDay,
    day,
    handleBackToMonth



}) {
    // const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobileXs = useMediaQuery(theme.breakpoints.down(321));

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (

        <>
            <div className={classes.packetHeaderMain}>
                <div className={classes.currentPacketInfoContainer}>
                    {/* <div className={classes.packetIcon}>
                        <CheckList />
                    </div> */}
                    <div className={classes.currentPacketInfo}>
                        <Typography className={classes.packetTitle}>اعتبار برگزاری آزمون و تکلیف</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.packetHeader}>
                <div className={classes.currentPacketInfoContainerSub}>

                    {activityPackets && activityPackets?.totalElements !== 0 &&
                        <div className={clsx(classes.currentPacketInfo, classes.pr20)}>
                            <Typography style={{ marginBottom: 9 }}>{activityPackets &&
                                activityPackets.content[0].statusType === 'EXPIRED' ?
                                `منقضی شده`
                                :
                                `تا ${numberFormat.toPersianDigits(
                                    jMoment
                                        .unix(activityPackets.content[0].endTime / 1000)
                                        .format("jDD jMMMM jYYYY")
                                )}`}</Typography>
                            <Typography>حداکثر <span> {activityPackets && numberFormat.toPersianDigits(activityPackets.content[0].pup.userCount)} </span> کاربر
                                {!isMobileXs && ' همزمان '}</Typography>

                        </div>
                    }

                    {activityPackets && activityPackets?.totalElements === 0 &&
                        <div className={clsx(classes.currentPacketInfo, classes.pr20)}>
                            <Typography style={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                <img src={noResult} style={{ width: 24, marginLeft: 9 }} />
                                بسته فعالیت وجود ندارد
                            </Typography>


                        </div>
                    }
                </div>
                {(activityPackets && activityPackets?.totalElements !== 0 &&
                    activityPackets?.content[0]?.statusType === 'EXPIRED') || activityPackets?.content[0]?.gift ?
                    <div className={classes.packetBuyActions}>
                        <button className={clsx(classes.extendBtn)}
                            onClick={() => _openSelectUsers(false, false, 'activityPacket')}>
                            <span>خرید بسته</span>
                        </button>
                    </div>
                    :
                    (activityPackets && activityPackets?.totalElements !== 0 && activityPackets?.content[0]?.statusType !== 'EXPIRED' && !activityPackets?.content[0].gift) &&
                    <div className={classes.packetActions}>
                        <button className={clsx(classes.extendBtn, classes.extendWidth)}
                            onClick={() => _openSelectUsers(false, true, 'activityPacket')}>
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
                                    _openSelectUsers(false, true, 'activityPacket')
                                    handleClose();
                                }}>تمدید
                                </div>
                            </MenuItem>
                            <MenuItem
                                className={classes.packetMenuLink}
                            >
                                <div onClick={(e) => {
                                    e.preventDefault()
                                    _openSelectUsers(true, false, 'activityPacket')

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

                    </div>}

                {activityPackets && activityPackets?.totalElements === 0 &&
                    <div className={classes.packetBuyActions}>
                        <button className={clsx(classes.extendBtn)}
                            onClick={() => _openSelectUsers(false, false, 'activityPacket')}>
                            خرید بسته
                        </button>
                    </div>
                }
            </div>
            {activityPackets && activityPackets?.totalElements !== 0 &&
                <div>
                    <ActivityPacketItem maxUsers={maxUsers} datas={usageList} date={date}
                        handleChangeDate={handleChangeDate}
                        verticalNumbers={classUsageList?.result?.tariffs ? [0, ...classUsageList?.result?.tariffs] : []}
                        handleShowDay={handleShowDay}
                        day={day}
                        handleBackToMonth={handleBackToMonth}
                    />
                    {/* <div className={classes.chartInfo}>
                        <InfoOutlinedIcon />
                        <Typography>
                        از طریق این نمودار حداکثر مجموع تعداد شرکت کنندگان در فعالیت کلاس هایی که شما میزبان آن هستید در هر روز (ساعت) نمایش داده می شود. 
<br/>
                                <Link href={`#`}>اطلاعات بیشتر</Link>
                        </Typography>
                    </div> */}
                </div>
            }
        </>
    )
}


export default ActivityPackets;