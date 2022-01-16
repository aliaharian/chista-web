import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { isAuth, userLogout } from "../../../../../redux/auth";
import Style from "../../../../assets/stylesheet/profile/dashboard.module.scss"
import { Button, Dialog, Divider, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import bookmark from '../../../../assets/images/profile/dashboardBookmark.svg'
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from "clsx";
import GridSidebar from "../../../../assets/images/profile/GridSidebar";
import CheckList from "../../../../assets/images/CheckList";


import { withSnackbar } from 'notistack';
import { numberFormat } from "../../../../utilities";

import { infoSnackbar } from "../../../../../redux/user";
import { dashboardItems, dashboardMenu } from "../../../../utilities/constants";
import TeacherRegister from "../TeacherRegister/TeacherRegister";



let time = 0;
let timeText = ''

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function UserDashboard(props) {
    const theme = useTheme();
    const [teacherRegisterDialog, setTeacherRegisterDialog] = useState(false)
    const userDetail = useSelector((state) => state.user.userDetail);
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const Dispatch = useDispatch();

    const handleComingSoon = (link = '#') => {
        // console.log(props)
        if (link === '#') {
            Dispatch(infoSnackbar(0))
        }
    }
    return (
        <Fragment>
            <div container className={Style.profileDashboardContainer}>
                <TeacherRegister
                open={teacherRegisterDialog}
                handleClose={() => setTeacherRegisterDialog(false)}/>
                {isMobile && (
                    <List component="div" disablePadding className={Style.Menu}>
                        {dashboardMenu.map((item, index) => {
                            if (item.role === 0 || props.user.roleTypeId === item.role) {
                                return (
                                    <>
                                        <ListItem button className={Style.MenuItem}
                                            onClick={() => handleComingSoon(item.link)}>
                                            <Link href={item.link}>
                                                <a>
                                                    <div className={Style.MenuItemIcon}>
                                                        {item.icon}
                                                    </div>
                                                    <ListItemText key={index} primary={item.title}
                                                        className={Style.MenuItemText}
                                                    />
                                                </a>
                                            </Link>
                                            <ChevronLeftIcon style={{opacity: 0.5}}/>
                                        </ListItem>

                                    </>
                                )
                            }
                        })}
                        {
                            (userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                            <>
                                <div className={Style.sidebarDivider}>
                                    <Typography>ویژه اساتید</Typography>

                                </div>
                                <ListItem button className={Style.MenuItem}>
                                    <Link href={'/profile/dashboard/ostad/activity'}>
                                        <a>
                                            <div className={Style.MenuItemIcon}>
                                                <CheckList />
                                            </div>
                                            <ListItemText key={0} primary={'فعالیت ها'}
                                                className={Style.MenuItemText}
                                            />
                                        </a>
                                    </Link>
                                    <ChevronLeftIcon />
                                </ListItem>
                            </>
                        }
                        {
                            (userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                            <>
                                <ListItem button className={Style.MenuItem}  onClick={() => setTeacherRegisterDialog(!teacherRegisterDialog)}>
                                    <a>
                                        <div className={Style.MenuItemIcon}>
                                            <CheckList />
                                        </div>
                                        <ListItemText key={0} primary={'ثبت نام به عنوان استاد'}
                                            className={Style.MenuItemText}
                                        />
                                    </a>
                                    <ChevronLeftIcon />
                                </ListItem>
                                <Divider orientation="horizontal" className={Style.divider} />
                            </>
                        }


                    </List>
                )}

                {!isMobile && dashboardItems.map((item) => {
                    if (props.user !== null) {
                        if (item.type === 'packetRemainedTime') {
                            if (Math.floor(props.user[item.type] / 3600) < 1) {
                                timeText = 'شما بسته فعالی ندارید'
                            } else if (Math.floor(props.user[item.type] / 3600) < 24) {
                                time = numberFormat.toPersianDigits(Math.floor(props.user[item.type] / 3600))
                                timeText = 'ساعت مانده به پایان بسته جاری'
                            } else {
                                time = numberFormat.toPersianDigits(Math.floor(props.user[item.type] / 86400))
                                timeText = 'روز مانده به پایان بسته جاری'
                            }
                        }
                    }
                    return (
                        <div className={Style.dashboardItem}>
                            <div>
                                <h3>{item.title}</h3>
                                <div className={Style.dashboardItemDesc}>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <div className={Style.dashboardItemIcon}
                                        style={item.type === 'favoriteCount' ? { padding: '17.5px 12px 17.5px 22.5px' } : {}}>
                                        <img src={item.icon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.dashboardItemDetail}>
                                <p>
                                    {item.detailPrefix}
                                    <span className={Style.priceAmount}>
                                        {
                                            // props.user !== null && (
                                            item.type === 'packetRemainedTime' ?
                                                time == 0 ? "" : time :
                                                item.type === 'credit' ?
                                                    numberFormat.toPersianDigits(numberWithCommas(props.user[item.type])) :
                                                    item.type === 'activityCount' ?
                                                        numberFormat.toPersianDigits(props.activityStat.mineCount) :
                                                        numberFormat.toPersianDigits(props.user[item.type])
                                            // )
                                        }
                                    </span>
                                    <span
                                        className={item.type === "credit" && Style.priceToman}>{item.type === 'packetRemainedTime' ? timeText : item.detailText}</span>
                                </p>
                                <Link href={item.link[1]}
                                >
                                    <a onClick={() => item.type === 'credit' ? handleComingSoon() : {}}>
                                        {item.link[0]}
                                        <ArrowBackIcon />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            {!isMobile && (
                <>
                    <p className={Style.note}>فقط شما میتوانید اطلاعات خود را ببینید. چیستا داده‌ها و اطلاعات شما،
                        استاد،
                        مخاطبین و کلاسها را امن،خصوصی و سالم نگهداری خواهد کرد و به دیگران اجازه مشاهده اطلاعات شخصی شما
                        را
                        نخواهد داد.
                        <div>
                            <Link href={'/privacy-policy'}>
                                <p className={Style.RightsLink} >
                                    سیاست حریم شخصی
                                </p>
                            </Link>
                        </div>
                    </p>

                </>
            )}
        </Fragment>
    );
}

UserDashboard.propTypes = {};
const mapStateToProps = (state) => ({
    user: state.user.user,
    adviser: state.user.adviser,
    authLoad: state.auth.load,
    userLoad: state.user.load,
});

export default connect(mapStateToProps)(withSnackbar(UserDashboard));
