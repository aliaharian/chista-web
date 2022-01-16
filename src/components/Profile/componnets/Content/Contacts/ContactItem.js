import React, {Fragment, useState} from "react";
import {Grid, Avatar, Typography, Fab, Tooltip, MenuItem, withStyles, Menu} from "@material-ui/core";
import useStyles from "./Styles";
import classes from './Contacts.module.scss';
import {transform, numberFormat, dateTime} from "../../../../../utilities";
import clsx from "clsx";
import Link from "../../../../Link/Link";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import ChatBubbleOutlineIcon from '../../../../../assets/images/profile/registerOstad/UserChatIcon';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LoginClass from "../../../../../assets/images/loginClass";

import StyledMenu from "../../../../menu/StyledMenu";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useRouter} from "next/router";

const ContactItem = ({
                         details,
                         display,
                         openInviteDialog,
                         openDeleteDialog,
                         openUpdateDialog,
                         itemRef,
                         handleSearch
                     }) => {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenChat, setIsOpenChat] = React.useState(false);
    const Router = useRouter();
    // if(itemRef===undefined){
    //     console.log('ref',itemRef)
    //     console.log('ref',details)
    //
    // }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleGoToChat() {
        localStorage.removeItem('open-chat');
        if (localStorage.getItem('isAuth')) {
            setIsOpenChat(false);
            const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${details.chatUserId}&&type=text`;
            window.open(url, '_blank');
        }
    }

    return (
        <Grid container item xs={12} sm={6} lg={4}
              ref={itemRef}
              className={classes.contactsItemParent}>
            <div
                // href="/adviser/[userId]"
                // as={"/adviser/" + details.id}
                className={classes.contactsContactItem}
            >
                <Fragment>
                    {/* <div className={classes.contactItem}> */}
                    <Grid xs={3} className={classes.contactsAvatarWrapper} style={{marginLeft: 15}}>
                        {/*<div className={classes.favoriteAvatarBorder}>*/}
                        {/*<Avatar*/}
                        {/*  src={transform.getImage(details.imageProfile)}*/}
                        {/*  className={classes.favoriteAvatar}*/}
                        {/*/>*/}
                        <ProfileAvatar user={details} variant="circle" avatar={classes.contactsAvatar}
                                       status={classes.contactsStatus + " " + transform.parseStatus(details.state, classes)}
                                       avatarContainer={classes.contactsAvatarContainer}
                                       onClick={() => {
                                           if (details.chatUserId) {
                                               Router.push(`/profile/dashboard/contacts/${details.chatUserId}`)
                                           }
                                       }}
                        />
                        {/* <div
                className={clsx(
                  classes.status,
                  display === "mobile" && classes.statusMobile,
                  details.state === 211
                    ? classes.statusActive
                    : details.state === 213
                    ? classes.statusBusy
                    : ""
                )}
              >
                {display === "desktop" && (
                  <VideocamOutlinedIcon
                    style={{ fontSize: 17 }}
                    className={classes.statusIcon}
                  />
                )}
              </div> */}
                        {/*</div>*/}
                    </Grid>
                    <Grid xs={9} className={classes.contactDataContainer}>
                        <div
                            className={clsx(
                                classes.contactItemName,
                                display === "mobile" && classes.contactItemNameMobile
                            )}
                        >
                            <div className={classes.contactDetailContainer}>
                                <Tooltip
                                    title={transform.fullName(details)} aria-label={transform.fullName(details)}
                                    placement="bottom-end"
                                    classes={{tooltip: classes.contactToolTip}}
                                >
                                    <Typography noWrap style={{
                                        marginBottom: 5,
                                        cursor:'pointer'
                                    }}
                                                onClick={() => {
                                                    if (details.chatUserId) {
                                                        Router.push(`/profile/dashboard/contacts/${details.chatUserId}`)
                                                    }
                                                }}
                                    >{transform.fullName(details)}</Typography>
                                </Tooltip>


                                <Typography
                                    noWrap>{details.chatUserId === 0 ? `عضو چیستا نیست` : details.status === 'CS_ONLINE' ? `آنلاین` : `آخرین بازدید ${dateTime.diffTime(details.wasOnline)}`}</Typography>
                            </div>
                            <div
                                className={clsx(classes.contactStar)}
                            >
                                {!isMobile &&
                                details.chatUserId !== 0 ?
                                    <Tooltip
                                        title="گفتگو" aria-label="گفتگو"
                                        placement="bottom-end"
                                        classes={{tooltip: classes.contactToolTip}}
                                    >
                                        <ChatBubbleOutlineIcon viewBox="0 0 30.141 30.141" className={classes.contactChatIcon}
                                                               onClick={() => handleGoToChat()}
                                        />
                                    </Tooltip>
                                    : !isMobile &&
                                    <Tooltip
                                        title="دعوت به چیستا" aria-label="دعوت به چیستا"
                                        placement="bottom-end"
                                        classes={{tooltip: classes.contactToolTip}}

                                    >
                                        <AddCircleOutlineIcon className={classes.contactChatIcon}
                                                              onClick={() => openInviteDialog(details)}/>
                                    </Tooltip>
                                }

                                <MoreVertIcon
                                    aria-controls="more"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    className={classes.contactEditBtnRes}
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
                                        details.chatUserId !== 0 &&
                                        <MenuItem
                                            className={classes.contactDetailLink}
                                            //  onClick={handelEditBtn}
                                        >
                                            <Link href={`/profile/dashboard/contacts/${details.chatUserId}`}>مشاهده
                                                جزییات</Link>
                                        </MenuItem>}
                                    {
                                        isMobile &&
                                        details.chatUserId !== 0 ?

                                            <MenuItem
                                                className={classes.contactDetailLink}
                                                onClick={() => handleGoToChat()}
                                            >
                                                <Link href={`#`} onclick={(e) => {
                                                    e.preventDefault()
                                                }}>
                                                    گفتگو</Link>
                                            </MenuItem>
                                            :
                                            isMobile &&
                                            <MenuItem
                                                className={classes.contactDetailLink}
                                                onClick={() => {
                                                    openInviteDialog(details)
                                                    handleClose()
                                                }}
                                            >
                                                <span>
                                                    دعوت به چیستا</span>
                                            </MenuItem>

                                    }

                                    <MenuItem
                                        className={classes.contactDetailLink}
                                        //  onClick={handelEditBtn}
                                    >
                                        <Link href={`#`} onClick={(e) => {
                                            e.preventDefault()
                                            handleClose()
                                            openUpdateDialog(details)
                                            // handleSearch({ target: { value: '' } })

                                        }}>
                                            ویرایش
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        className={classes.contactDetailLink}
                                        //  onClick={handelEditBtn}
                                    >
                                        <Link href={`#`} onClick={(e) => {
                                            e.preventDefault()
                                            handleClose()
                                            openDeleteDialog(details)
                                            // handleSearch({ target: { value: '' } })

                                        }}>
                                            حذف
                                        </Link>
                                    </MenuItem>
                                </StyledMenu>
                            </div>
                        </div>

                    </Grid>
                    {/* </div> */}
                </Fragment>
            </div>
        </Grid>
    );
};

export default ContactItem;
