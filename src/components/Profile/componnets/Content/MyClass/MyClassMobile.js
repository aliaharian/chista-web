import React, { useState } from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MenuItem, Menu, withStyles, TableCell, Button, TableContainer, Grid, useTheme } from "@material-ui/core";
import noDataIcon from "../../../../../assets/images/no_result_found.webp";
import AddWhite from '../../../../../assets/images/white_add.webp'
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import { transform, numberFormat, dateTime } from "../../../../../utilities";

import useStyles from "./Styles";
import { Typography } from '@material-ui/core';
import blackBoard from '../../../../../assets/images/Blackboard-white.svg'
import Link from "../../../../Link/Link";
import { useRouter } from "next/router";
import MyClassMobileItem from "./MyClassMobileItem";
// import noDataIcon from "../../../../../assets/images/no_result_search.svg";
import InsertClassDialog from "./InsertClass/Dialog";
import clsx from "clsx";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ClassItem from "../Contacts/contactDetail/tabs/CommonGroups/ClassItem";
import MyClassCheckOwner from "./MyClassCheckOwner";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Style from '../../../../../assets/stylesheet/profile/myClass/myClasses.module.scss';
import { convertNumberToLetter } from "../../../../../utilities/convertToArabicNum";

const MyClassMobile = ({ myClass, checkOwner, noData }) => {
    const classes = useStyles();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);

    const [showModalCheck, setShowModalCheck] = useState(false);
    const [openInsertClass, setOpenInsertClass] = useState(false)
    const theme = useTheme();
    const isXsMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const handleInsertClass = () => {
        if (checkOwner.responseCode !== 200) {
            setShowModalCheck(true);
            return;
        } else {
            setOpenInsertClass(true)
        }
        // router.push("/profile/dashboard/myClass/insertClass");
    };

    const StyledMenu = withStyles((theme) => ({
        paper: {
            overflow: 'visible',
            transform: "translateY(12px)!important",
            // border: 'none',
            width: '140px',
            borderRadius: '8px!important',
            // boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
            padding: '0 4px',
            '&>ul': {
                '&>li': {
                    minHeight: 35,
                    backgroundColor: '#fff !important'
                }
            },
            '&:after': {
                // boxShadow: '0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px #0c0b3126, -12px 0 15px -4px #0c0b3126',
                right: 15,
                top: -7,
                content: '""',
                display: 'block',
                position: 'absolute',
                transform: 'rotateZ(45deg)',
                width: 15,
                height: 15,
                backgroundColor: '#fff',
                zIndex: 90
            }
        },
    }))(Menu);

    const dateTimeRow = (item) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(
            item.createdTime
        );
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span>{month}</span> <span>{year}</span> - <span>{time}</span>
            </div>
        );
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={Style.myClassMobile}>
            {/*{*/}
            {/*    showModalCheck && */}
            {/*    (*/}
            <MyClassCheckOwner
                open={showModalCheck}
                checkOwner={checkOwner}
                closeModal={() => setShowModalCheck(false)}
            />
            {/*)*/}
            {/*}*/}
            {
                myClass.filterQuery.title && myClass.filterQuery.title != "" ?
                <React.Fragment>
                <p className={Style.allResultForSearch}>نتایج جستجو</p> 
                <p className={Style.numOfResultForSearch}>{myClass.result.length == 0 ? `هیچ نتیجه ای برای "${myClass.filterQuery.title}" یافت نشد`: `${convertNumberToLetter(myClass.result.length)} نتیجه برای جستجو`}</p>
                </React.Fragment>
                :
                null
            }
            {myClass.result.length > 0 ? 
            <div className={Style.mobileClassItemGrid}>
                {myClass.result.map((item, index) => (
                    // <MyClassMobileItem item={item}/>
                    <ClassItem spacing={isXsMobile ? 1 : 12} responsive data={item} key={item.id} />
                ))}
            </div>
            :
            (myClass.filterQuery.title == "" && myClass.filterQuery.active == "") || (!myClass.filter) ?
                <div className={Style.noClassFoundContainer}>
                    <img src={noDataIcon} alt="no data" className={Style.noClassFoundImg}/>
                    {(myClass.filter.query != "" || myClass.filter.title != "") ? 
                    <p>هیچ موردی یافت نشد</p>
                    :
                    <>
                    <p>در حال حاضر عضو هیچ کلاسی نیستید</p>
                    <p>در صورتی که میخواهید میزبان کلاس باشید بر روی دکمه ایجاد کلاس کلیک نمایید</p>
                    </>
                    }
                    <InsertClassDialog resetFilter={() => {
                    }} open={openInsertClass} toggleOpen={() => setOpenInsertClass(!openInsertClass)} />
                    <button
                    // href="/profile/dashboard/myClass/insertClass"
                    onClick={handleInsertClass}
                    >
                    {/*<AddCircleOutlineIcon/>*/}
                    <img src={AddWhite} alt={'add'}/>
                    <span>کلاس جدید</span>
                    </button>
                </div>
                : null
            }

            {showModalCheck && (
                <MyClassCheckOwner
                    checkOwner={checkOwner}
                    closeModal={() => setShowModalCheck(false)}
                    open={showModalCheck}

                />
            )}
        </div>
    );
};

export default MyClassMobile;
