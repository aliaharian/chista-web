import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import share from "../../../../../../assets/images/share.svg";
import save from "../../../../../../assets/images/bookmark.svg";

import Link from "../../../../../Link/Link";


import { Button, Menu, MenuItem, withStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import BookmarkIcon from "@material-ui/icons/Bookmark";
import useStyles from "./Styles";
import { useRouter } from "next/router";
import classes from './ContactDetail.module.scss'
const StyledMenu = withStyles((theme) => ({
    paper: {
        overflow: 'visible',
        transform: "translate(7px , -23px)!important",
        border: 'none',
        width: '140px',
        borderRadius: '8px!important',
        boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
        padding: '0 4px',
        '&:after': {
            boxShadow: '0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px #0c0b3126, -12px 0 15px -4px #0c0b3126',
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
const HeaderMobile = ({
    handleClick,
    setToggleShareModal,
    handleAddOrRemoveFav,
    userInfoProp,
    anchorEl,
    handleClose,
    setUpdateDialog,
    setDeleteDialog,
    contact,
    groupId,
    ...props
}) => {
    // const classes = useStyles();
    const router = useRouter()
    return (
        <div className={classes.contactDetailMobileHeader}>
            <div>
                <ArrowForwardIcon
                    className={classes.backArrow}
                    onClick={() => {
                        contact ? router.back() : router.push(`/profile/dashboard/myClass/${groupId}`)
                    }}
                />
            </div>
            <div className={classes.mobileHeaderActions}>
                {
                    (userInfoProp.roleTypeId === 2861) &&
                    <>
                        <Button
                            className={classes.contactDetailShare}
                            onClick={() => {
                                handleAddOrRemoveFav(userInfoProp.advisorId)
                            }}
                        >
                            {userInfoProp && userInfoProp.favorite ?
                                <BookmarkIcon />
                                :
                                <img src={save} />
                            }
                            {/*<img src={save}/>*/}
                        </Button>

                        <button
                            className={classes.contactDetailShare}
                            onClick={() => setToggleShareModal((prevState) => !prevState)}
                        >
                            <img src={share} />
                        </button>
                    </>
                }
                {/* <MoreVertIcon
                    aria-controls="more"
                    aria-haspopup="true"
                    onClick={handleClick}
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
                    {
                        contact ?
                            userInfoProp.deleted !== true &&
                            <>
                                <MenuItem
                                    className={classes.contactDetailLink}
                                >
                                    <Link href={`#`} onClick={(e) => {
                                        e.preventDefault()
                                        handleClose();
                                        setUpdateDialog(true)
                                    }}>ویرایش</Link>
                                </MenuItem>
                                <MenuItem
                                    className={classes.contactDetailLink}
                                >
                                    <Link href={`#`} onClick={(e) => {
                                        e.preventDefault()
                                        handleClose();
                                        setDeleteDialog(true)
                                    }}>حذف</Link>
                                </MenuItem>
                            </>
                            :
                            <>
                                <MenuItem
                                    className={classes.contactDetailLink}
                                >
                                    <Link href={`#`} onClick={(e) => {
                                        e.preventDefault()
                                        handleClose();
                                        // setDeleteDialog(true)
                                    }}>اخراج از کلاس</Link>
                                </MenuItem>
                            </>

                    }

                </StyledMenu> */}

            </div>
        </div>
    )


}
export default HeaderMobile;